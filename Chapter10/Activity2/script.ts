const server = "https://api.themoviedb.org/3/";
const apiKey = '<<insert-your-api-key-here>>';

const getSearchUrl = (value: string) => `${server}search/movie?api_key=${apiKey}&query=${value}`;
const getMovieUrl = (movieId: number) => `${server}movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number) => `${server}movie/${movieId}/credits?api_key=${apiKey}`;

const getJsonData = (url: string) => fetch(url).then(response => response.json());

const search = (value: string) => {

    const url = getSearchUrl(value);

    return getJsonData(url)
        .then((data:SearchResultApi) => {
            if (data.results.length === 0) {
                throw Error("Not found");
            }
            return data.results[0];
        })
        .then(resultMovie => {
            const movieUrl = getMovieUrl(resultMovie.id);
            const peopleUrl = getPeopleUrl(resultMovie.id);
            const dataPromise: Promise<MovieResultApi> = getJsonData(movieUrl);
            const peoplePromise: Promise<PeopleResultApi> = getJsonData(peopleUrl);

            return Promise.all([dataPromise, peoplePromise]);
        })
        .then(([movieData, peopleData]) => {
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
        });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search")!.addEventListener("click", () => {
      const movieInput = document.getElementById("title") as HTMLInputElement;
      const movieTitle = movieInput.value;
      search(movieTitle)
        .then(movie => showResults(movie))
        .catch(_ => clearResults(movieTitle));
    });

    document.getElementById("title")!.addEventListener("keyup", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      document.getElementById("search")!.click();
      event.preventDefault();
    });
});