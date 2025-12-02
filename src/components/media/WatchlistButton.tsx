'use client';

import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Movie, TVShow } from 'types/media';

interface WatchlistButtonProps {
    media: Movie | TVShow;
    type: 'movie' | 'tvshow';
}

export default function WatchlistButton({ media, type }: WatchlistButtonProps) {
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        const exists = watchlist.some((item: any) => item.id === media.id && item.type === type);
        setIsInWatchlist(exists);
    }, [media.id, type]);

    const toggleWatchlist = () => {
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

        if (isInWatchlist) {
            const newWatchlist = watchlist.filter((item: any) => !(item.id === media.id && item.type === type));
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            setIsInWatchlist(false);
        } else {
            const newItem = { ...media, type };
            watchlist.push(newItem);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            setIsInWatchlist(true);
        }
    };

    return (
        <Button
            variant={isInWatchlist ? "contained" : "outlined"}
            color="warning"
            startIcon={isInWatchlist ? <StarIcon /> : <StarBorderIcon />}
            onClick={toggleWatchlist}
        >
            {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
        </Button>
    );
}
