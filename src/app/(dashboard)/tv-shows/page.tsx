'use client';

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import TVShowCard from 'components/cards/TVShowCard';
import { mediaApi } from 'services/mediaApi';
import { TVShow } from 'types/media';

const ITEMS_PER_PAGE = 25;

export default function TVShowsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [tvShows, setTvShows] = useState<TVShow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTVShows = async () => {
            setLoading(true);
            try {
                const response = await mediaApi.getTVShows(searchTerm, currentPage, ITEMS_PER_PAGE);
                setTvShows(response.data);
                setError(null);
            } catch (err: any) {
                console.error('Error fetching TV shows:', err);
                setError(err.response?.data?.message || 'Failed to load TV shows. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchTVShows();
        }, 500); // Debounce search

        return () => clearTimeout(timeoutId);
    }, [searchTerm, currentPage]);

    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
                TV Shows
            </Typography>
            <TextField
                fullWidth
                placeholder="Search TV shows..."
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
                        {tvShows.map((show) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
                                <TVShowCard show={show} />
                            </Grid>
                        ))}
                    </Grid>
                    {tvShows.length === 0 && (
                        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                            No TV shows found matching your search.
                        </Typography>
                    )}
                    {tvShows.length > 0 && (
                        <Stack sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Pagination
                                count={296}
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
