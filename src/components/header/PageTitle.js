import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { makeStyles } from "@mui/styles";
import SidebarMobile from "../sidebar/SidebarMobile";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'



const useStyles = makeStyles({
    mobile: {
        display: 'none',
        '@media(max-width : 900px)': {
            display: 'block',

        }
    },

    mobappbar: {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 2%) !important',
        paddingRight: '0 !important'
    },
    mobtoolbar: {
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center'
    },
    hdrlistbox2: {
        backgroundColor: '#000',
        minHeight: '100vh'
    },
    mainDiv: {
        display: 'flex',
        alignItems: 'center'
    },
    logoBox: {
        width: '30px',
        display: 'inline-block',



    },
})


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});


const PageTitle = ({ HeaderTitle }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose2 = () => {
        setOpen(false);
    };
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.mobile}>
                    <Box className={classes.mobhdrbox}>
                        <Box className={classes.mobwrp}>
                            <Box>
                                <Box>
                                    <IconButton
                                        edge="start"
                                        sx={{ color: 'text.default' }}
                                        onClick={handleClickOpen}
                                        aria-label="close"
                                    >
                                        <DocumentScannerIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                        <Dialog
                            sx={{
                                width: '230px'
                            }}
                            fullScreen
                            open={open}
                            onClose={handleClose2}
                            TransitionComponent={Transition}
                        >
                            <AppBar sx={{ position: 'relative', padding: 0 }}
                                className={classes.mobappbar}
                            >
                                <Toolbar className={classes.mobtoolbar} sx={{ backgroundColor: 'bg.default' }}>
                                    <Link className={classes.logoBox} to="/">
                                        <Typography component={'img'} src={logo} width='100%' />

                                    </Link>
                                    <IconButton sx={{ color: 'text.default' }}
                                        edge="start"
                                        color="inherit"
                                        onClick={handleClose2}
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Toolbar>

                                <Box className={classes.hdrlistbox2} sx={{ backgroundColor: 'bg.default' }}>

                                    <SidebarMobile />
                                </Box>
                            </AppBar>

                        </Dialog>
                    </Box>
                </Box>
                <Box>
                    <Typography color={'text.default'} fontWeight={700}>{HeaderTitle}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default PageTitle;