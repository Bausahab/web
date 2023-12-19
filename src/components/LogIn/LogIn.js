import React, { useState } from 'react';
import { Alert, Box, Button, Container, Grid, Modal, TextField, Typography, } from '@mui/material';
import Axios from 'axios';
import { API_URL } from '../../config/index'
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import loginBg from '../../../src/login_bg.png';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import logo from '../assets/images/registerlogo.png';
import mini from '../assets/images/mini.png';
import { useTranslation } from 'react-i18next';

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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    //   backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  },
  size: {
    display: "flex",
    //  flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  triangleBox: {
    width: '40%',
    height: '30%',
    borderTop: "244px solid #094309",
    borderLeft: '402px solid transparent'
  },


  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    //  width: "40%", // Fix IE 11 issue.

    marginTop: theme.spacing(1),
    boxShadow: '0px 0px 12px -2px #0000002e',
    backgroundColor: '#fff',
    '@media(max-width : 600px)': {
      backgroundImage: 'none',
    }
  },
  submit: {
    background: "linear-gradient(90deg, #0AA94D, #000000)! important",
    margin: theme.spacing(3, 0, 2),
    padding: '0.8rem !important'
  },
  leftContent: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    padding: '1rem 0.5rem',
    background : 'linear-gradient(90deg, #0AA94D, #000000)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#fff ',
    fontWeight: 'bold !important',
    fontSize: '32px !important',
    marginBottom: '15px',

  },
  textp: {
    color: '#fff',
    fontSize: '15px',


  },
  errorBox: {
    textAlign: 'center',
    padding: '0.8rem 0rem',
    color: 'red'
  },
  formHeading: {
    fontWeight: '100 !important',
    color: '#bebdbd',
    padding: '0.5rem 0rem'
  }
}));

const LogIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const [errorMessege, setErrorMessage] = useState("")
  const [successMessege, setSuccessMessage] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Loader, setLoader] = useState(false)
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    t.changeLanguage(lng);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin = async () => {
    try {
      setLoader(true)
      // Validate fields before making the API call
      if (!email || !password) {
        setPasswordError(true);
        setEmailError(true);
        setLoader(false)
        return;
      }

      const headers = {
        'Content-Type': 'application/json'
      };

      const requestBody = JSON.stringify({
        email,
        password,
      });

      const response = await Axios.post(API_URL + 'login', requestBody, {
        headers: headers,
      });

      if (response.status === 200 && response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data))
        setLoader(false)
        setSuccessMessage(response.data.message);
        handleOpen();
        setTimeout(() => {
          handleClose();
          navigate('/');
        }, 2000);
      } else {
        console.error('Login failed:', response.status, response.data);
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoader(false)
        setErrorMessage('Unauthorized access. Please check your credentials.');
      } else if (error.response && error.response.status === 500) {
        setLoader(false)
        setErrorMessage('DB error please login later');
      }
      else {
        setErrorMessage('Login failed');
      }
    }
  };



  return (
    <>
  
      <Box component="main" className={classes.root}>
        <CssBaseline />
        <Box
          className={classes.size}
        >
          <Box className={classes.form} >
          <Box
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
          <Alert severity="success">{successMessege}</Alert>

        </Box>
            <Container>
            
              <Box className={classes.leftContent}>
                <Typography variant='h5' className={classes.welcome}  >
                {t('Welcome')} 
                </Typography>
                <Typography className={classes.textp} >
                {t('Auth')} 
                </Typography>
              </Box>
              <Grid container spacing={2}  >
                <Grid item md={7} sm={7} xs={12}>
                  <Box className={classes.formHeading}>
                    <Box mb={1.5} component={'img'} src={logo} />
                    <Typography variant='h4'> {t('LoginName')} </Typography>
                  </Box>
                  <Box>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      style={{ direction: t('rtl') }}
                      id="email"
                      label= {t('Email')} 
                      name="email"
                      autoFocus
                      error={passwordError}
                      helperText={emailError ? "Required field" : ""}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      style={{ direction: 'rtl' }}
                      name="password"
                      label= {t('Password')} 
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      error={passwordError}
                      helperText={passwordError ? "Required field" : ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              edge="end"
                              aria-label="toggle password visibility"
                              sx={{ outline: 'none' }}
                            >
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false); // Clear password error when user starts typing
                      }}
                    />
                    <Typography className='errorcolor'>
                      {errorMessege}
                    </Typography>
                    <Button
                      type="button"  // Use "button" type to prevent form submission (since you're handling it manually)
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      style={{ direction: t('rtl') }}
                      label= {t('Login')} 
                      onClick={handleLogin}
                    >
                      LogIn

                      {
                        Loader && <Box id="loader"></Box>
                      }
                    </Button>
                    <Box mt={5}>
                    </Box>
                  </Box>


                </Grid>
                <Grid item md={5} sm={5} xs={0} sx={{ '@media(max-width:600px)': { display: 'none' } }}>
                  <Box>

                    <Box component={'img'} src={mini} width={'100%'} />

                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {/* modal */}
        
        {/* modal */}
      </Box>


    </>
  )
}

export default LogIn