'use client';

import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

import { TVShow } from 'types/media';

interface TVShowCardProps {
    show: TVShow;
}

export default function TVShowCard({ show }: TVShowCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/tv-shows/${show.id}`);
    };

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                }
            }}
        >
            <CardActionArea onClick={handleClick} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={`https://image.tmdb.org/t/p/w500${show.posterPath}`}
                    alt={show.name}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div" noWrap>
                        {show.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={(show.voteAverage || 0) / 2} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            {show.voteAverage?.toFixed(1) || '0.0'}/10
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {show.firstAirDate ? new Date(show.firstAirDate).getFullYear() : 'N/A'}
                        {show.numberOfSeasons && ` • ${show.numberOfSeasons} Season${show.numberOfSeasons !== 1 ? 's' : ''}`}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                        {show.genres?.filter(Boolean).slice(0, 3).map((genre, index) => (
                            <Chip
                                key={typeof genre === 'string' ? genre : genre.id || index}
                                label={typeof genre === 'string' ? genre : genre.name}
                                size="small"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                        }}
                    >
                        {show.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
