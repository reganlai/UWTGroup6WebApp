'use client';

import { useEffect, useState, SyntheticEvent } from 'react';

// material-ui
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { authApi } from 'services/authApi';

import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// types
import { StringColorProps } from 'types/password';

export default function ChangePasswordForm() {
    const [level, setLevel] = useState<StringColorProps>();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    const changePassword = (value: string) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <Formik
            initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                currentPassword: Yup.string().required('Current password is required'),
                newPassword: Yup.string()
                    .required('New password is required')
                    .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) => value === value.trim())
                    .min(6, 'Password must be at least 6 characters')
                    .max(255, 'Password must be less than 255 characters')
                    .notOneOf([Yup.ref('currentPassword')], 'New password must be different from current password'),
                confirmPassword: Yup.string()
                    .required('Please confirm your new password')
                    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                try {
                    await authApi.changePassword({
                        password: values.newPassword
                    });

                    setStatus({ success: true });
                    setSubmitting(false);
                    resetForm();
                } catch (err: any) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, status }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {status?.success && (
                            <Grid item xs={12}>
                                <Alert severity="success">
                                    Password changed successfully!
                                </Alert>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="current-password">Current Password*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.currentPassword && errors.currentPassword)}
                                    id="current-password"
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={values.currentPassword}
                                    name="currentPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowCurrentPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                color="secondary"
                                            >
                                                {showCurrentPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter current password"
                                />
                            </Stack>
                            {touched.currentPassword && errors.currentPassword && (
                                <FormHelperText error id="helper-text-current-password">
                                    {errors.currentPassword}
                                </FormHelperText>
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="new-password">New Password*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.newPassword && errors.newPassword)}
                                    id="new-password"
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={values.newPassword}
                                    name="newPassword"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        changePassword(e.target.value);
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                color="secondary"
                                            >
                                                {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter new password"
                                />
                            </Stack>
                            {touched.newPassword && errors.newPassword && (
                                <FormHelperText error id="helper-text-new-password">
                                    {errors.newPassword}
                                </FormHelperText>
                            )}
                            <FormControl fullWidth sx={{ mt: 2 }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" fontSize="0.75rem">
                                            {level?.label}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="confirm-password">Confirm New Password*</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                    id="confirm-password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                color="secondary"
                                            >
                                                {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Confirm new password"
                                />
                            </Stack>
                            {touched.confirmPassword && errors.confirmPassword && (
                                <FormHelperText error id="helper-text-confirm-password">
                                    {errors.confirmPassword}
                                </FormHelperText>
                            )}
                        </Grid>

                        {errors.submit && (
                            <Grid item xs={12}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <AnimateButton>
                                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                                    Change Password
                                </Button>
                            </AnimateButton>
                        </Grid>

                        <Grid item xs={12}>
                            <Alert severity="info">
                                <strong>Note:</strong> Password requirements: minimum 6 characters, maximum 255 characters, must be different from current password.
                            </Alert>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
}
