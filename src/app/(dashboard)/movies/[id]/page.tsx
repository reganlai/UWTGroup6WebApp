import { notFound } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import DeleteMediaButton from 'components/media/DeleteMediaButton';
import WatchlistButton from 'components/media/WatchlistButton';

import Image from 'next/image';

interface MovieDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
    const { id } = await params;
    let movie;

    try {
        // Use fetch for server-side data fetching
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/movies/${id}`, {
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch movie');
        }

        movie = await response.json();
    } catch (error) {
        console.error('Failed to fetch movie:', error);
        notFound();
    }

    if (!movie) {
        notFound();
    }

    return (
        <Box>
            <Button component={Link} href="/movies" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
                Back to Movies
            </Button>

            <Grid container spacing={4}>
                {/* Poster */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`}
                            alt={movie.title}
                            width={400}
                            height={600}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </Card>
                </Grid>

                {/* Details */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h2" gutterBottom>
                            {movie.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <WatchlistButton media={movie} type="movie" />
                            <DeleteMediaButton id={movie.id} type="movie" title={movie.title} />
                        </Box>
                    </Box>

                    {movie.tagline && (
                        <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                            &quot;{movie.tagline}&quot;
                        </Typography>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={(movie.vote_average || 0) / 2} precision={0.1} readOnly size="large" />
                        <Typography variant="h6" sx={{ ml: 1 }}>
                            {movie.vote_average?.toFixed(1) || '0.0'}/10
                        </Typography>
                        {movie.vote_count && movie.vote_count > 0 && (
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                                ({movie.vote_count.toLocaleString()} votes)
                            </Typography>
                        )}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {movie.genres?.map((genre: string, index: number) => (
                            <Chip key={index} label={genre} color="primary" />
                        ))}
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarTodayIcon fontSize="small" color="action" />
                                <Typography variant="body1">
                                    <strong>Release Date:</strong>{' '}
                                    {movie.release_date
                                        ? new Date(movie.release_date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })
                                        : 'N/A'}
                                </Typography>
                            </Box>
                        </Grid>
                        {movie.runtime && (
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <AccessTimeIcon fontSize="small" color="action" />
                                    <Typography variant="body1">
                                        <strong>Runtime:</strong> {movie.runtime} minutes
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                        {movie.mpa_rating && (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    <strong>Rating:</strong> {movie.mpa_rating}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {movie.overview}
                    </Typography>

                    {movie.directors && movie.directors.length > 0 && (
                        <>
                            <Divider sx={{ my: 3 }} />
                            <Typography variant="h5" gutterBottom>
                                Director{movie.directors.length > 1 ? 's' : ''}
                            </Typography>
                            <Typography variant="body1">
                                {movie.directors.join(', ')}
                            </Typography>
                        </>
                    )}

                    {movie.actors && movie.actors.length > 0 && (
                        <>
                            <Divider sx={{ my: 3 }} />
                            <Typography variant="h5" gutterBottom>
                                Cast
                            </Typography>
                            <Grid container spacing={2}>
                                {movie.actors.slice(0, 6).map((actor: any, index: number) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {actor.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                as {actor.character}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    )}
                </Grid>
            </Grid>

            {movie.backdrop_url && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Backdrop
                    </Typography>
                    <Card>
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_url}`}
                            alt={`${movie.title} backdrop`}
                            width={1280}
                            height={720}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Card>
                </Box>
            )}
        </Box>
    );
}
