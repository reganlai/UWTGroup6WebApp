'use client';

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import MovieCard from 'components/cards/MovieCard';
import { mediaApi } from 'services/mediaApi';
import { Movie } from 'types/media';

const ITEMS_PER_PAGE = 25;

export default function MoviesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await mediaApi.getMovies(searchTerm, currentPage, ITEMS_PER_PAGE);
                setMovies(response.data);
                setError(null);
            } catch (err: any) {
                console.error(err);
                setError('Failed to load movies. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchMovies();
        }, 500); // Debounce search

        return () => clearTimeout(timeoutId);
    }, [searchTerm, currentPage]);

    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
                Movies
            </Typography>
            <TextField
                fullWidth
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 4 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ mb: 4 }}>
                    {error}
                </Alert>
            )}

            {!loading && !error && (
                <>
                    <Grid container spacing={3}>
                        {movies.map((movie) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Grid>
                        ))}
                    </Grid>
                    {movies.length === 0 && (
                        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                            No movies found matching your search.
                        </Typography>
                    )}
                    {movies.length > 0 && (
                        <Stack sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Pagination
                                count={435}
                                page={currentPage}
                                onChange={(e, page) => {
                                    setCurrentPage(page);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                color="primary"
                                size="large"
                            />
                        </Stack>
                    )}
                </>
            )}
        </Box>
    );
}
