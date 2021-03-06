import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        console.log(newInfo)
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = e => {
        alert('Submittig')
        // Collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    handleBookingClose()
                }
                // console.log(data)
            })
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
                <Typography id="modal-modal-title" sx={{ py: 2 }} variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue={time}
                        disabled
                        sx={{ width: '90%', my: 1 }}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        sx={{ width: '90%', my: 1 }}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        sx={{ width: '90%', my: 1 }}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="YOUR PHONE NUMBER"
                        sx={{ width: '90%', my: 1 }}
                        size="small"
                    />
                    <TextField
                        hiddenLabel
                        disabled
                        id="filled-hidden-label-small"
                        defaultValue={date.toDateString()}
                        sx={{ width: '90%', my: 1 }}
                        size="small"
                    />
                    <Button type="submit" variant="outlined">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;