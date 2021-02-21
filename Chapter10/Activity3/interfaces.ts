interface SearchResultApi {
    page: number,
    results: {
        id: number,
        title: string;
    }[]
}

interface MovieResultApi {
    id: number;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date: string;
    tagline: string;
    title: string;
    runtime:number;
}

interface PeopleResultApi {
    id: number;
    cast: CastResultApi[];
    crew: CrewResultApi[]
}

interface PersonResultApi {
    id: number,
    name: string;
}

interface CastResultApi extends PersonResultApi {
    order: number;
    character: string;
    profile_path: string;
}

interface CrewResultApi extends PersonResultApi {
    department: string;
    job: string;
}

interface Movie {
    id: number;
    title: string;
    tagline: string;
    releaseDate: Date;
    posterUrl: string;
    backdropUrl: string;
    overview: string;
    runtime: number;
    characters: Character[];
    directedBy: string;
    writenBy: string;
}

interface Character {
    name: string;
    actor: string;
    image: string;
}
