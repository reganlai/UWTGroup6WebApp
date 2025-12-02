import axios from 'axios';
import { Movie, TVShow } from 'types/media';

// Create a simple axios instance for local API routes
// Using relative URLs works for both server and client in Next.js
const localApi = axios.create();

export const mediaApi = {
    // Movies
    getMovies: (search?: string) =>
        localApi.get<Movie[]>(`/api/movies${search ? `?search=${search}` : ''}`),

    getMovie: (id: number | string) =>
        localApi.get<Movie>(`/api/movies/${id}`),

    createMovie: (data: Partial<Movie>) =>
        localApi.post<Movie>('/api/movies', data),

    deleteMovie: (id: number | string) =>
        localApi.delete(`/api/movies/${id}`),

    // TV Shows
    getTVShows: (search?: string) =>
        localApi.get<TVShow[]>(`/api/tv-shows${search ? `?search=${search}` : ''}`),

    getTVShow: (id: number | string) =>
        localApi.get<TVShow>(`/api/tv-shows/${id}`),

    createTVShow: (data: Partial<TVShow>) =>
        localApi.post<TVShow>('/api/tv-shows', data),

    deleteTVShow: (id: number | string) =>
        localApi.delete(`/api/tv-shows/${id}`)
};
