import { Box, Grid, Typography, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CardContent from "./CardContent";


const useStyles = makeStyles({
    card__Box: {
        backgroundColor: '#fff',
        borderTop: '2px solid #e7eaec',
    },
    Booking: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #e7eaec',
    },
    month: {
        backgroundColor: '#11511a',
        display: 'inline-block',
        fontSize: '12px !important',
        padding: '0.1rem 0.6rem',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: '#16842d'
        }
    }
})

const Card = ({ TopHeading, Month }) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.card__Box}>
                <Box className={classes.Booking}>
                    <Typography color={'#3c4042'} fontWeight={600}>{TopHeading}</Typography>
                    <Typography className={classes.month} fontWeight={700} color={'#fff'}>{Month}</Typography>
                </Box>

            </Box>
        </>
    )
}

export default Card;