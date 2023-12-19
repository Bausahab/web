import { Box, Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PageTitle from "./PageTitle";
import Navbar from "./Navbar";

const useStyles = makeStyles({
    btn: {
        border: '1px solid #ffffff3b !important',
        color: '#fff !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important'
    },
    btn2: {
        border: '1px solid #ffffff3b !important',
        color: '#fff !important',
        padding: '0.5rem 1rem 0.2rem 1rem !important',
        borderRadius: '3rem !important'
    },
    hdrBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '12px 2px 12px -7px #535353',
        padding: '0.5rem 1.5rem',
        position: 'fixed',
        backgroundColor: '#000',
        top: 0,
        right: 0,
        left: '28rem',
        zIndex: '1000',
        '@media(max-width : 1440px)': {
            left: '25.5rem',
            '@media(max-width : 1280px)': {
                left: '22.5rem',
                '@media(max-width : 1200px)': {
                    left: '0rem'
                }
            }
        }
    },
    headerList: {
        display: 'flex'
    },
    walletbtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
    },
    listitem: {
        marginLeft: '1rem'
    }
})



const Header = ({ HeaderTitle }) => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={0}>
                <Grid item lg={12}>
                    <Box className={classes.hdrBox} sx={{ backgroundColor: 'bg.default' }}>
                        <PageTitle HeaderTitle={HeaderTitle} />
                        <Navbar />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;