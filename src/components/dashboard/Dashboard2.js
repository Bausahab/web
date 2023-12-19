import { Box } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../sidebar/Sidebar";
import Registration from "../pages/registrationform/Registration";
import '../../Style/style.css';
import Footer from "../header/Footer";


const useStyles = makeStyles({

    mobGrid: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    }
})

const Dashboard2 = () => {

    const classes = useStyles();

    const [menuClick, setMenuClick] = useState(false);

    const handleMenu = ()=>{
        setMenuClick(!menuClick);
    }
    return (
        <>
            <Box>
                <Box sx={{ display: 'flex' }}>
                    <Box
                        className = {menuClick? 'left-side-l-c':'left-side-l d-none d-lg-block'}
                    >
                        <Sidebar menuClick={menuClick} className='' handleMenu={handleMenu} />
                    </Box>
                    <Box  className={menuClick? 'right-side-r-c': 'right-side-r w-100'}>
                        <Registration handleMenu={handleMenu} />
                    </Box>
              
                </Box>

            </Box>
        </>
    )
}

export default Dashboard2;