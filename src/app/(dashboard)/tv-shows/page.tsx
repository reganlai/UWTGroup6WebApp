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

import TVShowCard from 'components/cards/TVShowCard';
import { mediaApi } from 'services/mediaApi';
import { TVShow } from 'types/media';

export default function TVShowsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [tvShows, setTvShows] = useState<TVShow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTVShows();
    }, []);

    const fetchTVShows = async (search?: string) => {
        try {
            setLoading(true);
            setError(null);
            const response = await mediaApi.getTVShows(search);
            setTvShows(response.data);
        } catch (err: any) {
            console.error('Error fetching TV shows:', err);
            setError(err.response?.data?.message || 'Failed to load TV shows. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        if (value.trim()) {
            fetchTVShows(value);
        } else {
            fetchTVShows();
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    TV Shows
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    placeholder="Search TV shows..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>

            {loading && (
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                        <CircularProgress />
                    </Box>
                </Grid>
            )}

            {error && (
                <Grid item xs={12}>
                    <Alert severity="error">{error}</Alert>
                </Grid>
            )}

            {!loading && !error && tvShows.length === 0 && (
                <Grid item xs={12}>
                    <Alert severity="info">
                        No TV shows found. {searchTerm && 'Try a different search term.'}
                    </Alert>
                </Grid>
            )}

            {!loading && !error && tvShows.length > 0 && (
                <>
                    {tvShows.map((show) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
                            <TVShowCard show={show} />
                        </Grid>
                    ))}
                </>
            )}
        </Grid>
    );
}
