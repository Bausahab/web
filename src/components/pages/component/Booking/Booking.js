import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles({
    BookingBtn: {
        backgroundColor: 'transparent !important',
        textTransform: 'math-auto !important',
        color: '#0a5114 !important',
        border: '1px solid #0a5114 !Important',
        padding: '0.3rem 0.8rem !important',
        fontSize: '0.8rem !important',
        borderRadius: '4px !important',
        boxShadow: 'inherit !important',
        '&:hover': {
            backgroundColor: '#0a5114 !important',
            color: '#fff !important',
        }
    },
    bookingBox: {
        backgroundColor: '#f0f9f1',
        padding: '1rem',
        borderTop: '1px solid #e7eaec',
        borderBottom: '1px solid #e7eaec',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap:"10px",

    }
})

const Booking = ({ bookings, paraleft, pararight, price, BookingBtn }) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.bookingBox}>
                <Box>
                    <Typography variant="h5" fontWeight={600} color={'#676a6c'} fontSize={"1.3rem"}>{bookings}</Typography>
                    <Typography fontSize={13} color={'#676a6c'}>{paraleft} <Typography component={'span'} fontWeight={600} >{price}</Typography> {pararight}</Typography>
                </Box>
                {/* <Box>
                    <Box>
                        <Button className={classes.BookingBtn} variant="contained">{BookingBtn}</Button>
                    </Box>
                </Box> */}
            </Box>
        </>
    )
}

export default Booking;