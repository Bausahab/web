import React, { useState, useEffect, useRef } from 'react';
import { Box, Modal, Tooltip, Typography } from '@mui/material';


import { API_URL } from '../../config/index';
import RightSide from './RightSide/RightSide';
import { makeStyles } from '@mui/styles';





const useStyles = makeStyles(() => ({
    customTooltip: {
        backgroundColor: "black",
        fontSize: "15px"
    }
}));

const style = {
    position: 'absolute',
    top: '27vmax',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '33%',
    bgcolor: 'background.paper',
    outline: 'none',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};


const Addappointmentlist = ({handleMenu}) => {

    const classes = useStyles();

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [todayData, setTodayData1] = useState([]);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState({})
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const today = new Date();
    const year = today.getFullYear().toString(); // Get the last two digits of the year
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate1 = `${year}-${month}-${day}`;
    const [thisMonthData, setThisMonthData] = useState([])
    const [thisMonthClient, setThisMonthClient] = useState('')



    const today1 = new Date();

    // Add 7 days to the current date
    const nextWeek = new Date(today1);
    nextWeek.setDate(today1.getDate() + 7);

    const year1 = nextWeek.getFullYear().toString();
    const month1 = (nextWeek.getMonth() + 1).toString().padStart(2, '0');
    const day1 = nextWeek.getDate().toString().padStart(2, '0');

    const sevenDayAfterDate = `${year1}-${month1}-${day1}`;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Calculate the last date of the current month
    const lastDate = new Date(currentYear, currentMonth + 1, 0);
    
    // Format the last date as "YYYY-MM-DD"
    const formattedLastDate = lastDate.toISOString().slice(0, 10);






    

    const handleView = (item) => {
        setDetails(item)
        handleOpen()
    }


     

     
    



    return (

        <>
            <RightSide data={data} data1={data1} todayData={todayData} thisMonthData={thisMonthData} handleMenu={handleMenu} thisMonthClient={thisMonthClient} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='modal-header-box'>
                            <h5 className='h5model-heading'>Client Details</h5>
                            <button className='cross-btn' onClick={handleClose}>X</button>
                        </div>
                        <hr />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>First Name : </label>
                                <div className='details-values'>{details.firstname == null ? "NA" : details.firstname.length == 0 ? "NA" : details.firstname}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Last Name : </label>
                                <div className='details-values'>{details.lastname == null ? "NA" : details.lastname.length == 0 ? "NA" : details.lastname}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Email : </label>
                                <div className='details-values wrd-brk'>{details.email == null ? "NA" : details.email.length == 0 ? "NA" : details.email}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Phone No. : </label>
                                <div className='details-values'>{details.phone == null ? "NA" : details.phone.length == 0 ? "NA" : details.phone}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Date : </label>
                                <div className='details-values'>{details.date == null ? "NA" : details.date.length == 0 ? "NA" : details.date}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Time : </label>
                                <div className='details-values'>{details.slots == null ? "NA" : details.slots.length == 0 ? "NA" : details.slots}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Message : </label>
                                <div className='details-values'>{details.message == null ? "NA" : details.message.length == 0 ? "NA" : details.message}</div>
                            </div>
                            <div className='details-boxs'>
                                <label htmlFor="" className='details-label'>Slot Id : </label>
                                <div className='details-values'>{details.slot_id == null ? "NA" : details.slot_id.length == 0 ? "NA" : details.slot_id}</div>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>

    )

}

export default Addappointmentlist;
