'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// material-ui
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { mediaApi } from 'services/mediaApi';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export default function CreateMediaForm() {
    const router = useRouter();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="create media tabs">
                    <Tab label="Create Movie" />
                    <Tab label="Create TV Show" />
                </Tabs>
            </Box>

            {/* MOVIE FORM */}
            <TabPanel value={tabValue} index={0}>
                <Formik
                    initialValues={{
                        title: '',
                        overview: '',
                        posterPath: '',
                        releaseDate: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string().max(255).required('Title is required'),
                        overview: Yup.string().max(1000).required('Overview is required'),
                        posterPath: Yup.string().url('Must be a valid URL').required('Poster URL is required'),
                        releaseDate: Yup.string().required('Release Date is required')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            await mediaApi.createMovie({
                                title: values.title,
                                overview: values.overview,
                                poster_url: values.posterPath,
                                release_date: values.releaseDate,
                                vote_average: 0,
                                vote_count: 0,
                                genres: [],
                                actors: []
                            });
                            setStatus({ success: true });
                            setSubmitting(false);
                            router.push('/movies');
                        } catch (err: any) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="title">Title</InputLabel>
                                        <OutlinedInput
                                            id="title"
                                            type="text"
                                            value={values.title}
                                            name="title"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter movie title"
                                            fullWidth
                                            error={Boolean(touched.title && errors.title)}
                                        />
                                        {touched.title && errors.title && (
                                            <FormHelperText error id="helper-text-title">
                                                {errors.title}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="overview">Overview</InputLabel>
                                        <OutlinedInput
                                            id="overview"
                                            type="text"
                                            value={values.overview}
                                            name="overview"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter movie overview"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            error={Boolean(touched.overview && errors.overview)}
                                        />
                                        {touched.overview && errors.overview && (
                                            <FormHelperText error id="helper-text-overview">
                                                {errors.overview}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="posterPath">Poster URL</InputLabel>
                                        <OutlinedInput
                                            id="posterPath"
                                            type="text"
                                            value={values.posterPath}
                                            name="posterPath"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="https://example.com/poster.jpg"
                                            fullWidth
                                            error={Boolean(touched.posterPath && errors.posterPath)}
                                        />
                                        {touched.posterPath && errors.posterPath && (
                                            <FormHelperText error id="helper-text-posterPath">
                                                {errors.posterPath}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="releaseDate">Release Date</InputLabel>
                                        <OutlinedInput
                                            id="releaseDate"
                                            type="date"
                                            value={values.releaseDate}
                                            name="releaseDate"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            fullWidth
                                            error={Boolean(touched.releaseDate && errors.releaseDate)}
                                        />
                                        {touched.releaseDate && errors.releaseDate && (
                                            <FormHelperText error id="helper-text-releaseDate">
                                                {errors.releaseDate}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Create Movie
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </TabPanel>

            {/* TV SHOW FORM */}
            <TabPanel value={tabValue} index={1}>
                <Formik
                    initialValues={{
                        name: '',
                        overview: '',
                        posterPath: '',
                        firstAirDate: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().max(255).required('Name is required'),
                        overview: Yup.string().max(1000).required('Overview is required'),
                        posterPath: Yup.string().url('Must be a valid URL').required('Poster URL is required'),
                        firstAirDate: Yup.string().required('First Air Date is required')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            await mediaApi.createTVShow({
                                name: values.name,
                                overview: values.overview,
                                posterPath: values.posterPath,
                                firstAirDate: values.firstAirDate,
                                voteAverage: 0,
                                voteCount: 0,
                                genres: [],
                                cast: []
                            });
                            setStatus({ success: true });
                            setSubmitting(false);
                            router.push('/tv-shows');
                        } catch (err: any) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <OutlinedInput
                                            id="name"
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter TV show name"
                                            fullWidth
                                            error={Boolean(touched.name && errors.name)}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="helper-text-name">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="overview">Overview</InputLabel>
                                        <OutlinedInput
                                            id="overview"
                                            type="text"
                                            value={values.overview}
                                            name="overview"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter TV show overview"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            error={Boolean(touched.overview && errors.overview)}
                                        />
                                        {touched.overview && errors.overview && (
                                            <FormHelperText error id="helper-text-overview">
                                                {errors.overview}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="posterPath">Poster URL</InputLabel>
                                        <OutlinedInput
                                            id="posterPath"
                                            type="text"
                                            value={values.posterPath}
                                            name="posterPath"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="https://example.com/poster.jpg"
                                            fullWidth
                                            error={Boolean(touched.posterPath && errors.posterPath)}
                                        />
                                        {touched.posterPath && errors.posterPath && (
                                            <FormHelperText error id="helper-text-posterPath">
                                                {errors.posterPath}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="firstAirDate">First Air Date</InputLabel>
                                        <OutlinedInput
                                            id="firstAirDate"
                                            type="date"
                                            value={values.firstAirDate}
                                            name="firstAirDate"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            fullWidth
                                            error={Boolean(touched.firstAirDate && errors.firstAirDate)}
                                        />
                                        {touched.firstAirDate && errors.firstAirDate && (
                                            <FormHelperText error id="helper-text-firstAirDate">
                                                {errors.firstAirDate}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Create TV Show
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </TabPanel>
        </Box>
    );
}
