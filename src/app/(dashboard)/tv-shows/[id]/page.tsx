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
import TvIcon from '@mui/icons-material/Tv';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import DeleteMediaButton from 'components/media/DeleteMediaButton';
import WatchlistButton from 'components/media/WatchlistButton';

import { mediaApi } from 'services/mediaApi';
import Image from 'next/image';

interface TVShowDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function TVShowDetailPage({ params }: TVShowDetailPageProps) {
    const { id } = await params;
    let show;

    try {
        const response = await mediaApi.getTVShow(id);
        show = response.data;
    } catch (error) {
        console.error('Failed to fetch TV show:', error);
        notFound();
    }

    if (!show) {
        notFound();
    }

    return (
        <Box>
            <Button component={Link} href="/tv-shows" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
                Back to TV Shows
            </Button>

            <Grid container spacing={4}>
                {/* Poster */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <Image src={show.posterPath} alt={show.name} width={400} height={600} style={{ width: '100%', height: 'auto' }} priority />
                    </Card>
                </Grid>

                {/* Details */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h2" gutterBottom>
                            {show.name}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <WatchlistButton media={show} type="tvshow" />
                            <DeleteMediaButton id={show.id} type="tvshow" title={show.name} />
                        </Box>
                    </Box>

                    {show.tagline && (
                        <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                            &quot;{show.tagline}&quot;
                        </Typography>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={show.voteAverage / 2} precision={0.1} readOnly />
                        <Typography variant="h6" sx={{ ml: 1 }}>
                            {show.voteAverage.toFixed(1)}/10
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                            ({show.voteCount.toLocaleString()} votes)
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {show.genres.map((genre) => (
                            <Chip key={genre.id} label={genre.name} color="primary" />
                        ))}
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarTodayIcon fontSize="small" color="action" />
                                <Typography variant="body1">
                                    <strong>First Air Date:</strong> {new Date(show.firstAirDate).toLocaleDateString()}
                                </Typography>
                            </Box>
                        </Grid>
                        {show.numberOfSeasons && (
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <TvIcon fontSize="small" color="action" />
                                    <Typography variant="body1">
                                        <strong>Seasons:</strong> {show.numberOfSeasons}
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                        {show.numberOfEpisodes && (
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <LiveTvIcon fontSize="small" color="action" />
                                    <Typography variant="body1">
                                        <strong>Episodes:</strong> {show.numberOfEpisodes}
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                        {show.episodeRunTime && show.episodeRunTime.length > 0 && (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    <strong>Episode Runtime:</strong> {show.episodeRunTime.join(', ')} minutes
                                </Typography>
                            </Grid>
                        )}
                        {show.status && (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    <strong>Status:</strong> {show.status}
                                </Typography>
                            </Grid>
                        )}
                        {show.creators && show.creators.length > 0 && (
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <strong>Creators:</strong> {show.creators.join(', ')}
                                </Typography>
                            </Grid>
                        )}
                        {show.networks && show.networks.length > 0 && (
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <strong>Networks:</strong> {show.networks.join(', ')}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {show.overview}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom>
                        Cast
                    </Typography>
                    <Grid container spacing={2}>
                        {show.cast.map((member) => (
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

            {show.backdropPath && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Backdrop
                    </Typography>
                    <Card>
                        <Image
                            src={show.backdropPath}
                            alt={`${show.name} backdrop`}
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
