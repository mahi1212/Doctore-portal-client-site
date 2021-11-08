import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const { name, time, space } = booking
    const [openBooking, setOpenBookign] = React.useState(false);
    const handleBookingOpen = () => setOpenBookign(true);
    const handleBookingClose = () => setOpenBookign(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ pb: 1 }} component="div" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal date={date} booking={booking} handleBookingClose={handleBookingClose} openBooking={openBooking}></BookingModal>
        </>
    );
};

export default Booking;