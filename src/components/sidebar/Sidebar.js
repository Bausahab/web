import React from "react";
import { Box, List, ListItem, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useNavigate } from "react-router-dom";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import logo from '../../components/assets/images/logo1.png'
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Committee from '../assets/images/Committee.png'



const useStyles = makeStyles({



    mainDiv: {
        backgroundImage: 'linear-gradient(175deg, #0AA94D, #000000)',
        minHeight: '100vh',


    },
    listitem: {
        display: 'inherit !important',
        padding: '0rem !important',
        cursor: 'pointer',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: 'rgb(6 151 67)',
            
        }
    },
    iconWidth: {
        width: '1.2rem !important',
        height: '1.2rem !important'
    },
    lightMode: {
        color: '#ffa500'
    },

    iconText: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.6rem 0rem'
    },
    box__logo: {
        textAlign: 'center',
        padding: '2rem 1rem',
        width: '120px',
        margin: 'auto',

    },
    box__logo2: {
        textAlign: 'center',
        padding: '2rem 0rem 0rem 0rem',

    },
    tooltip: {
        backgroundColor: "#808080 !important",
        color: "#4A4A4A",
        marginTop: "0px !important",
        padding: "5px 15px !important",
        fontSize: "13px !important",
        fontWeight: "bold !important"
    },
    arrow: {
        "&:before": {
        },
        color: "#808080 !important"
    },


})

const Sidebar = ({ menuClick, handleMenu }) => {

    const classes = useStyles();
    const navigation = useNavigate();


    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#fff' : '#fff',
            backgroundColor: isActive ? 'rgb(6 151 67)' : '#fff0',
            display: 'block',
            transition: '0.5s',
            fontSize: '30px',
            textDecoration: 'none',
            padding: '0.4rem 1rem',

        }
    }

    const handleLogout = () => {
        localStorage.clear();
        navigation('/login')
    }
    return (
        <>
            <Box  >
                <Box className={classes.mainDiv} >
                    <List>

                        <Box className="close-icon-box d-lg-none">
                            <CloseIcon sx={{ color: '#000' }} onClick={handleMenu} />
                        </Box>
                        <Box className={menuClick ? classes.box__logo2 : classes.box__logo}>
                            <Box>
                                <Box component={'img'} src={logo} width={'100%'} 
                                sx={{
                                    '@media(max-width 900px)': {
                                        padding: '0rem 3rem !important'
                                    }
                                }} />
                            </Box>

                        </Box>


                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="javascript:void(0)" className='d-lg-none'>
                                <Box className={classes.iconText}>
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Welcome, Admin</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>
                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="javascript:void(0)" className='d-lg-none'>
                                <Box className={classes.iconText}>
                                    <PersonIcon className={classes.iconWidth} />
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Profile</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>
                        {/* <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Dashboard</div> : ''} placement="right" arrow>
                                        <DashboardIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Dashboard</Typography>
                                 

                                </Box>
                            </NavLink>
                        </ListItem> */}
                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Slot</div> : ''} placement="right" arrow>
                                        <EventAvailableIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    {/* <Typography ml={1} className={menuClick ? "heading d-lg-none":''} >Slot Availability </Typography> */}
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Registration </Typography>
                                </Box>
                            </NavLink>
                        </ListItem>
                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/registrationlist">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Slot</div> : ''} placement="right" arrow>
                                        <EventAvailableIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    {/* <Typography ml={1} className={menuClick ? "heading d-lg-none":''} >Slot Availability </Typography> */}
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Registration List </Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/visiting">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Slot</div> : ''} placement="right" arrow>
                                        <ScheduleIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    {/* <Typography ml={1} className={menuClick ? "heading d-lg-none":''} >Slot Availability </Typography> */}
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} >Visiting  </Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem>
                            <Box component={'img'} src={Committee} width={'100%'}/>
                        </ListItem>

                        {/* <ListItem className={classes.listitem} >
                            <NavLink style={navLinkStyles} to="javascript:void(0)">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Appointment</div> : ''} placement="right" arrow>
                                        <PermContactCalendarIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''}>Work packages</Typography>
                                </Box>

                            </NavLink>
                        </ListItem> */}

                        {/* <ListItem className={classes.listitem} >
                            <NavLink style={navLinkStyles} to="javascript:void(0)">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Appointment</div> : ''} placement="right" arrow>
                                        <PermContactCalendarIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''}>Calender</Typography>
                                </Box>

                            </NavLink>
                        </ListItem> */}


                        {/* <ListItem className={classes.listitem} >
                            <NavLink style={navLinkStyles} to="/client">
                                <Box className={classes.iconText}>
                                    <PersonIcon className={classes.iconWidth} />
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none":''}>Client</Typography>
                                </Box>

                            </NavLink>
                        </ListItem> */}
                        {/* <ListItem className={classes.listitem} >
                            <NavLink style={navLinkStyles} to="javascript:void(0)">
                                <Box className={classes.iconText}>
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title={menuClick ? <div style={{ padding: "5px" }}>Payment</div> : ''} placement="right" arrow>
                                        <PaidIcon className={classes.iconWidth} />
                                    </Tooltip>
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''}>Team planner</Typography>
                                </Box>

                            </NavLink>
                        </ListItem> */}
                        <ListItem className={classes.listitem} >
                            <NavLink style={navLinkStyles} to="/login" className='d-lg-none'>
                                <Box className={classes.iconText}>
                                    <LogoutIcon className={classes.iconWidth} />
                                    <Typography ml={1} className={menuClick ? "heading d-lg-none" : ''} onClick={handleLogout}>Log out</Typography>
                                </Box>

                            </NavLink>
                        </ListItem>








                    </List>
                </Box >
            </Box >
        </>
    )
}

export default Sidebar;