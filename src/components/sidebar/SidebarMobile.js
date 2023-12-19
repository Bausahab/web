import React, { useContext, } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import LayersIcon from '@mui/icons-material/Layers';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import StreamIcon from '@mui/icons-material/Stream';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StoreIcon from '@mui/icons-material/Store';
import SummarizeIcon from '@mui/icons-material/Summarize';
import logo from '../assets/images/logo.png'




const useStyles = makeStyles({

    mainDiv: {
        backgroundColor: '#000',
        minHeight: '100vh',
        '@media(max-width : 1200px)': {
            marginTop: '5rem',
        }

    },
    listitem: {
        display: 'inherit !important',
        padding: '0rem !important',
        cursor: 'pointer',
        transition: '0.5s',
        textAlign: 'center'
    },
    iconWidth: {
        width: '2rem !important',
        height: '2rem !important'
    },
    lightMode: {
        color: '#ffa500'
    },
    logoBox: {
        width: '36px',
        display: 'inline-block',
        padding: '1rem 0.7rem',
        marginBottom: '1.5rem',
        '@media(max-width : 1200px)': {
            padding: '1rem 1.4rem',
            marginBottom: '0.5rem',
        }
    }
})

const SidebarMobile = () => {





    const classes = useStyles();
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#ffa500' : 'red',
            transition: '0.5s',
            display: 'block',
            padding: '1.2rem 0rem',
            fontSize: '30px',
            textAlign: 'center'
        }
    }
    return (
        <>
            <Box sx={{
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'Sliderroot.default',
                },
            }}>
                <Box className={classes.mainDiv} sx={{ backgroundColor: 'bg.default' }}>
                    <List>

                        <Link className={classes.logoBox} to="/">
                            <Typography component={'img'} src={logo} width='100%' />
                        </Link>


                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/">
                                <DashboardIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/bridge">
                                <SwapHorizontalCircleIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/stake">
                                <LayersIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/nft">
                                <PhotoLibraryIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/vesting">
                                <AgricultureIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/perpetual">
                                <StreamIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/leadboard">
                                <LeaderboardIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/marketplace">
                                <StoreIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/otc/eth">
                                <SummarizeIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>





                    </List>
                </Box>
            </Box>
        </>
    )
}

export default SidebarMobile;