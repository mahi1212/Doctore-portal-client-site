import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value

        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Password did not matched")
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ marginTop: '10rem' }} >
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }}>Register</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic" sx={{ width: '75%', mt: 2 }}
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%' }}
                            label="Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%' }}
                            label="Confirm Password"
                            type="password"
                            name='password2'
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '75%', mt: 4 }} variant="contained" type='submit'>Register</Button>
                        <br />
                        <NavLink to='/login'>
                            <Button sx={{ width: '75%', mt: 4 }} variant="text" type='submit'>Already registered? Please login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    { authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="login_image" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;