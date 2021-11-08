import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import background from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { height } from '@mui/system';

const bannerBg = {
    background: `url(${background})`,
    marginTop: '15px'
}

const verticalCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    height: '450px'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ paddingLeft: '50px' }}>
                    <Box style={verticalCenter} >
                        <Typography variant="h3" sx={{ fontWeight: '700' }}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ color: 'gray', py: 4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi perspiciatis doloribus provident incidunt iusto natus illo! Minus, impedit sapiente!</Typography>
                        <Button variant="contained" style={{ width: '150px' }}>Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;