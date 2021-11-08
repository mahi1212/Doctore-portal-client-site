import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value

        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ marginTop: '10rem' }} >
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }}>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic" sx={{ width: '75%', mt: 2 }}
                            label="Your Email"
                            name="email"
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
                        <br />
                        <Button sx={{ width: '75%', mt: 4 }} variant="contained" type='submit'>Login</Button>
                        <br />
                        <NavLink to='/register'>
                            <Button sx={{ width: '75%', mt: 4 }} variant="text" type='submit'>New user? Please register</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">User Logged in!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="login_image" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;