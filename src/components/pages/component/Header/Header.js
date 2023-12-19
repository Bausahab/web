import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import shield from '../../../assets/images/shield.png'
import ksa from '../../../assets/images/ksa.png'

const useStyles = makeStyles({
    Header__Box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #e7eaec',
        backgroundImage: 'linear-gradient(90deg, #0AA94D, #000000)',
    },
    ksa: {
        width: '240px'
    },
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center'
    },
    hdr__button: {
        color: '#999c9e !important',
        fontWeight: 500,
        textTransform: 'math-auto !important',
        '&:hover': {
            background: 'none !important',
            color: '#fff !important',
        }
    },
    textWelcome: {
        fontSize: 15,
        color: '#999c9e',
        fontWeight: 500,
        transition: '0.9s easy   ',
        '&:hover': {
            color: '#fff',
        }
    }
})

const Header = ({ handleMenu }) => {
    const classes = useStyles();
    const navigation = useNavigate();

    const userStoredData = localStorage.getItem('user');
    const user_name = JSON.parse(userStoredData);

    const handleLogout = () => {
        localStorage.clear()
        navigation('/login')

    }
    const handleProfile = () => {
        navigation('/profile')
    }
    return (
        <>
            <Box className={classes.Header__Box}>

                <Box sx={{
                    backgroundImage: `url(${shield})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    padding: '10px 8px 5px 8px',
                    boxShadow: '0px 0px 10px -2px #000',
                    backgroundColor: '#fff',
                    borderRadius: '30px',
                    width: '45px',
                    height: '45px',
                }}>
                    <MenuIcon onClick={handleMenu} className="menu-icon-cls" />
                </Box>

                <Box><Box component={'img'} src={ksa} className={classes.ksa} /></Box>
                <Box>
                    <Box className={classes.ul} component={'ul'}>
                        <Box component={'li'} className="d-none d-lg-block">
                            <Typography className={classes.textWelcome}>Welcome, User</Typography>
                            {/* {user_name?.name} */}
                        </Box>
                        <Box component={'li'} className="d-none d-lg-block">
                            <Button className={classes.hdr__button} startIcon={<PersonIcon />} >
                                Profile
                            </Button>
                        </Box>
                        <Box component={'li'} className="d-none d-lg-block">
                            <Button className={classes.hdr__button} startIcon={<LogoutIcon />} onClick={handleLogout}>
                                Log out
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header;