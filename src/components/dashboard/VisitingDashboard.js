import { Box } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../sidebar/Sidebar";
import Visiting from "../pages/component/visiting/Visiting";
import '../../Style/style.css';

const useStyles = makeStyles({

    mobGrid: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    }
})

const VisitingDashboard = () => {

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
                        <Visiting handleMenu={handleMenu} />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default VisitingDashboard;