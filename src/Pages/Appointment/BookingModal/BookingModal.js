import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const BookingModal = ({ openBooking, handleBookingClose, booking , date}) => {
    const { name, time } = booking
    const handleBookingSubmit = e => {
        alert('Submittig')
        // Collect data
        // ADD to server
        

        handleBookingClose()
        e.preventDefault()
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" sx={{py: 2}} variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue={time}
                        disabled
                        sx={{width: '90%', my:1}}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue="YOUR NAME"
                        sx={{width: '90%', my:1}}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue="YOUR EMAIL"
                        sx={{width: '90%', my:1}}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue="YOUR PHONE NUMBER"
                        sx={{width: '90%', my:1}}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        disabled
                        id="filled-hidden-label-small"
                        defaultValue = {date.toDateString()}
                        sx={{width: '90%', my:1}}
                        size="small"
                    />
                    <Button type="submit" variant="outlined">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;