import React, { useEffect, useState } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Plan from '../Plan/Plan'
import axios from 'axios';


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const PricesGrid = () => {


    const [planes, setPlanes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getPlanes = async () => {
            setLoading(true)

            try {
                const planesFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/prices`);
                console.log(planesFromAPI)
                setPlanes(planesFromAPI.data.slice(0, 30))
                setLoading(false)
            } catch (error) {
                console.log('ERROR DEL CATCH:', error)
                setLoading(false)
            }

        }

        getPlanes();

    }, [])

    return (
        <>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {/* ---------------INCLUIR EL MAP DE LOS PLANES AQUI----------------- */}
                    {!loading && planes.map((e) => {
                        return <Plan tier={e} />
                    })}
                    {/* ---------------TERMINA EL MAP DE LOS PLANES AQUI----------------- */}
                </Grid>
            </Container>
            <Copyright sx={{ mt: 5 }} />
        </>
    )
}

export default PricesGrid
