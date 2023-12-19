import React, {useState } from 'react';
import { Box, Modal, Typography, } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../Header/Header';
import registerlogo from '../../../assets/images/registerlogo.png';
import {API_URL} from '../../../../config/index'
import Footer from '../../../header/Footer';
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
  textAlign: 'center',
  '@media(max-width : 767px)': {
    width: '50%',
  },
  '@media(max-width : 600px)': {
    width: '92%',
  }
};

const Visiting = ({handleMenu}) => {

  const userStoredData = localStorage.getItem('user');
  const user_id = JSON.parse(userStoredData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const successhandleOpen = () => setOpen2(true);
  const successhandleClose = () => setOpen2(false);
  const [Loader, setLoader] = useState(false)

  const [flightnumber, setFlightnumber] = useState('');
  const [flightdate, setFlightdate] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [card, setCard] = useState(1);
  const [mobile, setMobile] = useState('');

  function saveVisiting() {

console.log("card",card)
console.log("user_id.id",user_id.id)
console.log("flightnumber",flightnumber)
console.log("flightdate",flightdate)
console.log("firstname",firstname)
console.log("lastname",lastname)
console.log("mobile",mobile)
        setLoader(true)
        let data = {};
        data['uid'] = user_id.id;
        data['flightnumber'] = flightnumber;
        data['flightdate'] = flightdate;
        data['firstname'] = firstname;
        data['lastname'] = lastname;
        data['card'] = card;
        data['mobile'] = mobile;
      

        if (!flightnumber || !flightdate || !firstname || !lastname || card === '' || !mobile) {
            setLoader(false)
            handleOpen()
            return false;
        }else{
        }

        fetch(API_URL + "visiting", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((resp) => {
                  successhandleOpen()
                  setLoader(false)
                });
            }
            else if (response.status === 401) {
            }
            else {
                console.log("network error")
            }


        })



    }

  return (
    <div>
      <Header handleMenu={handleMenu} />
      <div className='register-bg'>
      <div className='wrp-registraion-box'>
        <div className='register-header-wrp'>
          <div className='reg-heading'><h3>Visiting</h3></div>
          <div className='reg-img'><img src={registerlogo} alt='logo' /></div>
        </div>
        <div className='lines'></div>
        <div>
            <ul className='inputlisttop'>
            <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Flight Number:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input value={flightnumber} onChange={e => setFlightnumber(e.target.value)} placeholder='Enter flight number' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Flight Date:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input value={flightdate} onChange={e => setFlightdate(e.target.value)} type='date' placeholder='Enter ID xxxx xxxx xxxx xxxx' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Full Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield'><input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Enter first name' /></div>
                    <div className='inputfield'><input value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Enter last name' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Mobile No:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input value={mobile} onChange={e => setMobile(e.target.value)} placeholder='Mobile no' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Car Required:</label>
                  </div>
                  <div className='custom-radio'>
                    <input type='radio' onChange={e => setCard(1)} name="gender" />
                    <label>Yes</label>
                    <input onChange={e => setCard(0)} className='femalinput' type='radio' name="gender" />
                    <label>No</label>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div className='submit-btn'>
          <button onClick={saveVisiting}>Submit
          {
            Loader && <Box id="loader"></Box>
          }
          </button>
        </div>
      </div>
      </div>
<Footer/>
      {/* modal */}
      <Modal  
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                      backdrop: {
                        timeout: 500,
                      },
                    }}
                  >
                    <Fade in={open}>
                      <Box sx={style}>
                        <Box className="closeicons"><CloseIcon onClick={handleClose} /></Box>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                          Please fill all required field
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
          {/* modal */}

          {/* modal */}
          <Modal  
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open2}
                    onClose={successhandleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                      backdrop: {
                        timeout: 500,
                      },
                    }}
                  >
                    <Fade in={open2}>
                      <Box sx={style}>
                        <Box className="closeicons"><CloseIcon onClick={successhandleClose} /></Box>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                          Form submit successfully
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
          {/* modal */}
    </div>
  );
};

export default Visiting;

