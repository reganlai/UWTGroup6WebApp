import { notFound } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { getMovieById } from 'data/mockData';
import Image from 'next/image';

interface MovieDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
    const { id } = await params;
    const movie = getMovieById(parseInt(id));

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
                            src={movie.posterPath}
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
                    <Typography variant="h2" gutterBottom>
                        {movie.title}
                    </Typography>

                    {movie.tagline && (
                        <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                            &quot;{movie.tagline}&quot;
                        </Typography>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={movie.voteAverage / 2} precision={0.1} readOnly />
                        <Typography variant="h6" sx={{ ml: 1 }}>
                            {movie.voteAverage.toFixed(1)}/10
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                            ({movie.voteCount.toLocaleString()} votes)
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {movie.genres.map((genre) => (
                            <Chip key={genre.id} label={genre.name} color="primary" />
                        ))}
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarTodayIcon fontSize="small" color="action" />
                                <Typography variant="body1">
                                    <strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}
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
                        {movie.status && (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    <strong>Status:</strong> {movie.status}
                                </Typography>
                            </Grid>
                        )}
                        {movie.director && (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    <strong>Director:</strong> {movie.director}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>

                    {(movie.budget || movie.revenue) && (
                        <Grid container spacing={2} sx={{ mb: 3 }}>
                            {movie.budget && (
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AttachMoneyIcon fontSize="small" color="action" />
                                        <Typography variant="body1">
                                            <strong>Budget:</strong> ${movie.budget.toLocaleString()}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )}
                            {movie.revenue && (
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AttachMoneyIcon fontSize="small" color="action" />
                                        <Typography variant="body1">
                                            <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    )}

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {movie.overview}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Cast
                    </Typography>
                    <Grid container spacing={2}>
                        {movie.cast.map((member) => (
                            <Grid item xs={12} sm={6} md={4} key={member.id}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            as {member.character}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {movie.backdropPath && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Backdrop
                    </Typography>
                    <Card>
                        <Image
                            src={movie.backdropPath}
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
