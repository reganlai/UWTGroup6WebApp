import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import CreateMediaForm from 'sections/media/CreateMediaForm';

// ================================|| CREATE MEDIA ||================================ //

export default function CreateMediaPage() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <Typography variant="h3">Create Media</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Add a new Movie or TV Show to the database.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
                <CreateMediaForm />
            </Grid>
        </Grid>
    );
}
