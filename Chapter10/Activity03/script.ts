const server = "https://api.themoviedb.org/3/";
const apiKey = '<<insert-your-api-key-here>>';

const getSearchUrl = (value: string) => `${server}search/movie?api_key=${apiKey}&query=${value}`;
const getMovieUrl = (movieId: number) => `${server}movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number) => `${server}movie/${movieId}/credits?api_key=${apiKey}`;

const getJsonData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
}

const search = async (value: string) => {

    const url = getSearchUrl(value);

    const data: SearchResultApi = await getJsonData(url);
    if (data.results.length === 0) {
        throw Error("Not found");
    }
    const resultMovie = data.results[0];
    const movieUrl = getMovieUrl(resultMovie.id);
    const peopleUrl = getPeopleUrl(resultMovie.id);
    const movieData: MovieResultApi = await getJsonData(movieUrl);
    const peopleData: PeopleResultApi = await getJsonData(peopleUrl);
    peopleData.cast.sort((f, s) => f.order - s.order);
    const mainActors = peopleData.cast.slice(0, 6);
    const characters :Character[] = mainActors.map(actor => ({
        name: actor.character,
        actor: actor.name,
        image: actor.profile_path
    }))

    const directors = peopleData.crew
        .filter(person => person.department === "Directing" && person.job === "Director")
        .map(person => person.name)
    const directedBy = directors.join(" & ");

    const writers = peopleData.crew
        .filter(person => person.department === "Writing" && person.job === "Writer")
        .map(person => person.name);
    const writtenBy = writers.join(" & ");

    const movie: Movie = {
        id: movieData.id,
        title: movieData.title,
        tagline: movieData.tagline,
        releaseDate: new Date(movieData.release_date),
        posterUrl: movieData.poster_path,
        backdropUrl: movieData.backdrop_path,
        overview: movieData.overview,
        runtime: movieData.runtime,
        characters: characters,
        directedBy: directedBy,
        writenBy: writtenBy
    }
    return movie;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search")!.addEventListener("click", async () => {
      const movieInput = document.getElementById("title") as HTMLInputElement;
      const movieTitle = movieInput.value;
      try {
        const movie = await search(movieTitle);
        showResults(movie);
      } catch {
        clearResults(movieTitle);
      }
    });

    document.getElementById("title")!.addEventListener("keyup", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      document.getElementById("search")!.click();
      event.preventDefault();
    });
});