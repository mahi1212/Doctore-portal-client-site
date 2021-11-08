import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(42, 50, 82, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '175px'
}

const ApointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '400px', marginTop: '-110px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ textAlign: 'left', color: '#24c2bb', mt : 5}}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant='h4' sx={{ textAlign: 'left', color: 'white', margin: '10px 0' }}>
                            MAKE AN APPOINTMENT TODAY
                        </Typography>
                        <Typography sx={{ textAlign: 'left', color: 'white', my : 3 }}>
                            This is too long if you are not making the appointment.It maybe helpful for you. Talk to doctors today!
                        </Typography>
                        <Box sx={{ textAlign: 'left' }}>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default ApointmentBanner;