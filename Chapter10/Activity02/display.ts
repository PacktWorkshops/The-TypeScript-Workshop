const getCastElements = (movie: Movie) => movie.characters.map(character => {
    const image = character.image
        ? `<img src="http://image.tmdb.org/t/p/w185/${character.image}" class="image" />`
        : `<img src="https://via.placeholder.com/185x277.png?text=No+Image" class="image" />`;

    const charName = character.name ? ` as ${character.name}` : "";

    return `<div class="character">
        ${image}
        <div class="actor">${character.actor}<br />${charName}</div>
    </div>`;
}).join("");

const getRuntime = ({ runtime }: Movie) => {
  if (!runtime) {
    // do not display the runtime field if we don't know the runtime
    return "";
  }

  if (runtime < 60) {
    return `<div class="runtime detail"><strong>Run time: </strong>${runtime}min</div>`;
  }
  const hours = (runtime / 60) | 0;
  const minutes = runtime % 60;
  return `<div class="runtime detail"><strong>Run time: </strong>${hours}h ${minutes}min</div>`;
};

const showResults = (movie: Movie) => {
  const backdropUrl = `http://image.tmdb.org/t/p/w1280/${movie.backdropUrl}`;
  document.body.style.backgroundImage = `url('${backdropUrl}')`;

  const result = document.getElementById("result")!;

  const poster = movie.posterUrl 
    ? `<img src="http://image.tmdb.org/t/p/w500/${movie.posterUrl}" class="poster" />`
    : `<img src="https://via.placeholder.com/500x750.png?text=No+Poster+Available" class="poster" />`

  result.innerHTML = `<div class="main-part">
        <div class="title">${movie.title} (${movie.releaseDate.getFullYear()})</div>
        ${poster}
        <div class="tagline">${movie.tagline}</div>
    </div>
    <div class="details-part">
        <div class="overview detail"><strong>Plot summary: </strong>${movie.overview}</div>
        <div class="director detail"><strong>Directed By: </strong>${movie.directedBy}</div>
        <div class="screenplay detail"><strong>Written By: </strong>${movie.writenBy}</div>
        ${getRuntime(movie)}
        <div class="starring detail"><strong>Starring:</strong></div>
        <div class="cast">
            ${getCastElements(movie)}
        </div>
    </div>`;
};

const clearResults = (search: string) => {
    document.body.style.backgroundImage = "";

    const result = document.getElementById("result")!;
    result.innerHTML = `<h1>No movies found for query "${search}"</h1>`
  };