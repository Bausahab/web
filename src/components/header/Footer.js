import { Box, Grid, Typography, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";





const Footer = ({ HeaderTitle }) => {

    return (
        <>
            <Box sx={{
                textAlign:'center',
                padding:'2rem 0.5rem',
            }}>
                <Typography>© 2023 Ministry of sports  all rights reserved</Typography>
            </Box>
        </>
    )
}

export default Footer;