import { Box } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Editregistrationlist from "../pages/editregistrationlist/Editregistrationlist";
import '../../Style/style.css';

const EditregistrationDashboard = () => {
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
                        <Editregistrationlist handleMenu={handleMenu} />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default EditregistrationDashboard;