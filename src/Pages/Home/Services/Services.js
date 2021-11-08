import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        "name": "Flouride Treatment",
        "description": "Teeth related problem and treatment is provided. We provide best service of town",
        'img': 'https://i.ibb.co/b66126s/fluoride.png'
    },
    {
        "name": "Cavity Feeling",
        "description": "Cavity feeling treatment is applied here. We provide best service of town",
        'img': 'https://i.ibb.co/vmbKKwG/cavity.png'
    },
    {
        "name": "Teeth Whitening",
        "description": "Teeth maked white by this treatment. We provide best service of town",
        "img": "https://i.ibb.co/fXkhbRK/whitening.png"
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'secondary.main', m:3}} gutterBottom variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 500, mb:3 }} gutterBottom variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.Name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;