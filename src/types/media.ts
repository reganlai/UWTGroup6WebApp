// types/media.ts

export interface Genre {
    id: number;
    name: string;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profilePath?: string;
}

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_url: string;
    backdrop_url?: string;
    release_date: string;
    vote_average?: number;
    vote_count?: number;
    genres: string[]; // API returns array of strings, not objects
    runtime?: number;
    tagline?: string;
    mpa_rating?: string;
    budget?: string;
    revenue?: string;
    collection?: string | null;
    original_title?: string;
    directors?: string[];
    actors?: Array<{
        name: string;
        character: string;
        profile?: string;
    }>;
}

export interface TVShow {
    id: number;
    name: string;
    overview: string;
    posterPath: string;
    backdropPath?: string;
    firstAirDate: string;
    voteAverage: number;
    voteCount: number;
    genres: Genre[];
    numberOfSeasons?: number;
    numberOfEpisodes?: number;
    episodeRunTime?: number[];
    tagline?: string;
    cast: CastMember[];
    creators?: string[];
    status?: string;
    networks?: string[];
}
