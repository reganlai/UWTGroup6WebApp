'use client';

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import MovieCard from 'components/cards/MovieCard';
import TVShowCard from 'components/cards/TVShowCard';
import { Movie, TVShow } from 'types/media';

export default function WatchlistPage() {
    const [watchlist, setWatchlist] = useState<any[]>([]);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        setWatchlist(storedWatchlist);
    }, []);

    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
                My Watchlist
            </Typography>

            {watchlist.length === 0 && (
                <Alert severity="info" sx={{ mb: 4 }}>
                    Your watchlist is empty. Add movies and TV shows to keep track of what you want to watch.
                </Alert>
            )}

            <Grid container spacing={3}>
                {watchlist.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.type}-${item.id}`}>
                        {item.type === 'movie' ? (
                            <MovieCard movie={item as Movie} />
                        ) : (
                            <TVShowCard show={item as TVShow} />
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
