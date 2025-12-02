'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { mediaApi } from 'services/mediaApi';

interface DeleteMediaButtonProps {
    id: number | string;
    type: 'movie' | 'tvshow';
    title: string;
}

export default function DeleteMediaButton({ id, type, title }: DeleteMediaButtonProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            if (type === 'movie') {
                await mediaApi.deleteMovie(id);
                router.push('/movies');
            } else {
                await mediaApi.deleteTVShow(id);
                router.push('/tv-shows');
            }
        } catch (error) {
            console.error('Failed to delete media:', error);
            // Handle error (show snackbar, etc.)
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete Media?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete &quot;{title}&quot;? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} color="error" autoFocus disabled={loading}>
                        {loading ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
