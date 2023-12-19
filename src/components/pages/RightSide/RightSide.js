import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Box, Button, Grid } from '@mui/material';
import Card from '../component/CardBox/Card';
import CardContent from '../component/CardBox/CardContent';
import Header from '../component/Header/Header';
import Booking from '../component/Booking/Booking';
import { API_URL } from '../../../config';
import Upload from '../UploadItem';
import FileUpload from 'react-material-file-upload/lib';
import DataTable from '../DataTable';

const useStyles = makeStyles({
   Card__box: {
      padding: '1.5rem',
   },
   dataTable:{
    
      margin:'2rem 1.5rem'
   }
})

const RightSide = ({ data, data1, handleMenu, todayData, thisMonthData, thisMonthClient }) => {

   const numberOfBooking = data.length
   const upcomingBooking = data1.length
   const todayBooking = todayData.length
   const thisMonthRecord = thisMonthData.length
   const totalMonthClient = thisMonthClient;

   const [totalAmount, setTotalAmount] = useState('');
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth();

   // Calculate the last day of the current month
   const lastDay = new Date(currentYear, currentMonth + 1, 0);




   const columns = [
      // {
      //     title: "Slot Id", field: "id"
      // },
      {
         title: "Name", field: "name"
      },
      {
         title: "Date / Time", field: "date"
      },
      {
         title: <span className="text-right">Action</span>, field: 'actions'
      },
   ]
   const columns1 = [
      {
         title: "Name", field: "name", width: "80%"
      },
      {
         title: "Date / Time", field: "date"
      },
   ]
   const defaultMaterialTheme = createTheme();

   const classes = useStyles();






   return (
      <>
         <Header handleMenu={handleMenu} />
         <Box className={classes.Card__box}>
            <Grid container spacing={4}>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Card
                     TopHeading={'New Bookings'}
                     Month={'Next 7 days'}
                  />
                  <CardContent
                     CardTitle={upcomingBooking}
                     CardPara={'booking'}
                     CardTitle2={''}
                     CardPara2={''}
                  />
               </Grid>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Card
                     TopHeading={'All Bookings'}
                     Month={'This Month'}
                  />
                  <CardContent
                     CardTitle={thisMonthRecord}
                     CardPara={'booking'}
                     CardTitle2={`$ ${totalAmount}`}
                     CardPara2={'total amount'}
                  />
               </Grid>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Card
                     TopHeading={'Clients'}
                     Month={'This Month'}
                  />
                  <CardContent
                     CardTitle={'0'}
                     CardPara={'new clients'}
                     CardTitle2={totalMonthClient ? totalMonthClient : 0}
                     CardPara2={'total clients'}
                  />
               </Grid>
            </Grid>
         </Box>
         <Upload />
         <Box className={classes.dataTable}>
            <DataTable />
         </Box>
      </>
      // <div className='right-body-main'>
      //    <div className='right-side-middel-body'>
      //       <div className='middel-body-right-side-box1'>
      //          <div className='middel-body-right-side'>
      //             <div>
      //                <h4 className='upcoming-heading'>Upcoming bookings</h4>
      //                <p className='bookedtoday-number'>You have {upcomingBooking} bookings today</p>
      //             </div>
      //             <div>
      //                <button className='view-all-booking'>View All Bookings</button>
      //             </div>
      //          </div>
      //          <div>
      //             <ThemeProvider theme={defaultMaterialTheme}>
      //                <MaterialTable
      //                   options={{
      //                      search: true,
      //                      showTitle: false,
      //                      toolbar: true,
      //                      pageSize: data1?.length <= 5 ? 5 : data1?.length > 5 && data1?.length <= 10 ? 10 : data1?.length > 10 && data1?.length <= 20 ? 20 : data1?.length > 20 && data1?.length <= 30 ? 30 : data1?.length > 30 && data1?.length <= 40 ? 40 : data1?.length > 40 && data1?.length <= 50 ? 50 : data1?.length > 50 && data1?.length <= 100 ? 100 : 150,
      //                      pageSizeOptions: [5, 10, 20, 50, 150, 200]
      //                   }}
      //                   columns={columns1}
      //                   data={data1}
      //                // title=""
      //                />
      //             </ThemeProvider>
      //          </div>
      //       </div>
      //       <div className='middel-body-right-side-box2'>
      //          <div className='middel-body-right-side'>
      //             <div>
      //                <h3 className='latest-heading'>Latest bookings</h3>
      //                <p className='bookedtoday-number'>Total {numberOfBooking} bookings made</p>
      //             </div>
      //             <div>
      //                <button className='view-all-booking'>Add Booking</button>
      //             </div>
      //          </div>
      //          <div>
      //             <ThemeProvider theme={defaultMaterialTheme}>
      //                <MaterialTable
      //                   options={{
      //                      search: true,
      //                      showTitle: false,
      //                      toolbar: true,
      //                      // pageSize: 15,
      //                      pageSize: data?.length <= 5 ? 5 : data?.length > 5 && data?.length <= 10 ? 10 : data?.length > 10 && data?.length <= 20 ? 20 : data?.length > 20 && data?.length <= 30 ? 30 : data?.length > 30 && data?.length <= 40 ? 40 : data?.length > 40 && data?.length <= 50 ? 50 : data?.length > 50 && data?.length <= 100 ? 100 : 150,
      //                      pageSizeOptions: [5, 10, 20, 50, 150, 200]
      //                   }}
      //                   columns={columns}
      //                   data={data}
      //                // title=""
      //                />
      //             </ThemeProvider>
      //          </div>
      //       </div>
      //    </div>

      // </div>
   )
}

export default RightSide