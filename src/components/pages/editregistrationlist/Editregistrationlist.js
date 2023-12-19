import React, { useState, useEffect, useRef } from 'react';
import {useParams} from 'react-router-dom'
import { Box, Modal, Typography, } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import ChildForm from './ChildForm';
import Addguest from './Addguest';
import Header from '../component/Header/Header';
import registerlogo from '../../assets/images/registerlogo.png';
import { API_URL } from '../../../config/index'
import Footer from '../../header/Footer';
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

const Editregistrationlist = ({ handleMenu }) => {
  const userStoredData = localStorage.getItem('user');
  const {id} = useParams();
  const [data, setData] = useState([]);
  const user_id = JSON.parse(userStoredData);
  const [childForms, setChildForms] = useState([{}]); // Initialize with an initial form for Child 1
  const [guestForms, setGuestForms] = useState([{}]); // Initialize with an initial form for Child 1
  const firstname = useRef();
  const lastname = useRef();
  const candidateid = useRef();
  const [gender, setGender] = useState(1);
  const fathersfirstname = useRef();
  const fatherslastname = useRef();
  const fathersid = useRef();
  const nationality = useRef();
  const fathersnationality = useRef();
  const mothersfirstname = useRef();
  const motherslastname = useRef();
  const mothersnationality = useRef();
  const mothersid = useRef();
  const ranks = useRef();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const successhandleOpen = () => setOpen2(true);
  const successhandleClose = () => setOpen2(false);
  const [Loader, setLoader] = useState(false)

  
  const handleAddChild = () => {
    setChildForms([...childForms, {}]);
  };

  const handleRemoveChild = (index) => {
    const updatedChildForms = [...childForms];
    updatedChildForms.splice(index, 1);
    setChildForms(updatedChildForms);
  };

  const handleUpdateChild = (index, data) => {
    const updatedChildForms = [...childForms];
    updatedChildForms[index] = data;
    setChildForms(updatedChildForms);
  };

  const handleAddGuest = () => {
    setGuestForms([...guestForms, {}]);
  };

  const handleRemoveGuest = (index) => {
    const updatedGuestForms = [...guestForms];
    updatedGuestForms.splice(index, 1);
    setGuestForms(updatedGuestForms);
  };

  const handleUpdateGuest = (index, data) => {
    const updatedGuestForms = [...guestForms];
    updatedGuestForms[index] = data;
    setGuestForms(updatedGuestForms);
  };

  useEffect(() => {
    registrationlistbyid();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


const registrationlistbyid = () => {

    fetch(API_URL + "get/ragistration/list/" + id,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        }
    ).then((response) => {
        if (response.status === 200) {
            response.json().then((resp) => {
            setData(resp.data[0]);
            });
        }

    })
}

  function updateregistration() {

    setLoader(true)
    let data = {};
    data['childDetails'] = childForms;
    data['firstname'] = firstname.current.value;
    data['lastname'] = lastname.current.value;
    data['candidateid'] = candidateid.current.value;
    data['gender'] = gender;
    data['fathersfirstname'] = fathersfirstname.current.value;
    data['fatherslastname'] = fatherslastname.current.value;
    data['fathersid'] = fathersid.current.value;
    data['nationality'] = nationality.current.value;
    data['fathersnationality'] = fathersnationality.current.value;
    data['mothersfirstname'] = mothersfirstname.current.value;
    data['motherslastname'] = motherslastname.current.value;
    data['mothersnationality'] = mothersnationality.current.value;
    data['mothersid'] = mothersid.current.value;
    data['guestDetails'] = guestForms;
    data['ranks'] = ranks.current.value;

    if (!firstname.current.value || !lastname.current.value || !candidateid.current.value || !fathersfirstname.current.value || !fatherslastname.current.value || !fathersid.current.value || !nationality.current.value || !fathersnationality.current.value || !mothersfirstname.current.value || !motherslastname.current.value || !mothersnationality.current.value || !mothersid.current.value) {
      setLoader(false)
      handleOpen()
      return false;
    } else {
    }

    fetch(API_URL + "update/ragistration/list/" + id, {
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
          setTimeout(()=>{
       
          },2000)
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
            <div className='reg-heading'><h3>Personal Information</h3></div>
            <div className='reg-img'><img src={registerlogo} alt="logo" /></div>
          </div>
          <div className='lines'></div>
          <div>
            <ul className='inputlisttop'>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Full Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield'><input defaultValue={data?.firstname} ref = {firstname} placeholder='Enter first name' /></div>
                    <div className='inputfield'><input defaultValue={data?.lastname} ref = {lastname} placeholder='Enter last name' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>ID:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input defaultValue={data?.candidateid} ref = {candidateid} placeholder='Enter ID xxxx xxxx xxxx xxxx' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Rank:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <select ref={ranks}>
                        <option value="0">Select Rank</option>
                        <option value="1" selected={data?.ranks == 1?true: false}>None</option>
                        <option value="2" selected={data?.ranks == 2?true: false}>Rank 15</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Nationality:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <select ref={nationality}>
                        <option value="0">Select nationality</option>
                        <option value="AF" selected={data?.nationality === "AF"?true: false}>Afghanistan</option>
                        <option value="AX" selected={data?.nationality === "AX"?true: false}>Åland Islands</option>
                        <option value="AL" selected={data?.nationality === "AL"?true: false}>Albania</option>
                        <option value="DZ" selected={data?.nationality === "DZ"?true: false}>Algeria</option>
                        <option value="AS" selected={data?.nationality === "AS"?true: false}>American Samoa</option>
                        <option value="AD" selected={data?.nationality === "AD"?true: false}>Andorra</option>
                        <option value="AO" selected={data?.nationality === "AO"?true: false}>Angola</option>
                        <option value="AI" selected={data?.nationality === "AI"?true: false}>Anguilla</option>
                        <option value="AQ" selected={data?.nationality === "AQ"?true: false}>Antarctica</option>
                        <option value="AG" selected={data?.nationality === "AG"?true: false}>Antigua and Barbuda</option>
                        <option value="AR" selected={data?.nationality === "AR"?true: false}>Argentina</option>
                        <option value="AM" selected={data?.nationality === "AM"?true: false}>Armenia</option>
                        <option value="AW" selected={data?.nationality === "AW"?true: false}>Aruba</option>
                        <option value="AU" selected={data?.nationality === "AU"?true: false}>Australia</option>
                        <option value="AT" selected={data?.nationality === "AT"?true: false}>Austria</option>
                        <option value="AZ" selected={data?.nationality === "AZ"?true: false}>Azerbaijan</option>
                        <option value="BS" selected={data?.nationality === "BS"?true: false}>Bahamas</option>
                        <option value="BH" selected={data?.nationality === "BH"?true: false}>Bahrain</option>
                        <option value="BD" selected={data?.nationality === "BD"?true: false}>Bangladesh</option>
                        <option value="BB" selected={data?.nationality === "BB"?true: false}>Barbados</option>
                        <option value="BY" selected={data?.nationality === "BY"?true: false}>Belarus</option>
                        <option value="BE" selected={data?.nationality === "BE"?true: false}>Belgium</option>
                        <option value="BZ" selected={data?.nationality === "BZ"?true: false}>Belize</option>
                        <option value="BJ" selected={data?.nationality === "BJ"?true: false}>Benin</option>
                        <option value="BM" selected={data?.nationality === "BM"?true: false}>Bermuda</option>
                        <option value="BT" selected={data?.nationality === "BT"?true: false}>Bhutan</option>
                        <option value="BO" selected={data?.nationality === "BO"?true: false}>Bolivia, Plurinational State of</option>
                        <option value="BQ" selected={data?.nationality === "BQ"?true: false}>Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA" selected={data?.nationality === "BA"?true: false}>Bosnia and Herzegovina</option>
                        <option value="BW" selected={data?.nationality === "BW"?true: false}>Botswana</option>
                        <option value="BV" selected={data?.nationality === "BV"?true: false}>Bouvet Island</option>
                        <option value="BR" selected={data?.nationality === "BR"?true: false}>Brazil</option>
                        <option value="IO" selected={data?.nationality === "IO"?true: false}>British Indian Ocean Territory</option>
                        <option value="BN" selected={data?.nationality === "BN"?true: false}>Brunei Darussalam</option>
                        <option value="BG" selected={data?.nationality === "BG"?true: false}>Bulgaria</option>
                        <option value="BF" selected={data?.nationality === "BF"?true: false}>Burkina Faso</option>
                        <option value="BI" selected={data?.nationality === "BI"?true: false}>Burundi</option>
                        <option value="KH" selected={data?.nationality === "KH"?true: false}>Cambodia</option>
                        <option value="CM" selected={data?.nationality === "CM"?true: false}>Cameroon</option>
                        <option value="CA" selected={data?.nationality === "CA"?true: false}>Canada</option>
                        <option value="CV" selected={data?.nationality === "CV"?true: false}>Cape Verde</option>
                        <option value="KY" selected={data?.nationality === "KY"?true: false}>Cayman Islands</option>
                        <option value="CF" selected={data?.nationality === "CF"?true: false}>Central African Republic</option>
                        <option value="TD" selected={data?.nationality === "TD"?true: false}>Chad</option>
                        <option value="CL" selected={data?.nationality === "CL"?true: false}>Chile</option>
                        <option value="CN" selected={data?.nationality === "CN"?true: false}>China</option>
                        <option value="CX" selected={data?.nationality === "CX"?true: false}>Christmas Island</option>
                        <option value="CC" selected={data?.nationality === "CC"?true: false}>Cocos (Keeling) Islands</option>
                        <option value="CO" selected={data?.nationality === "CO"?true: false}>Colombia</option>
                        <option value="KM" selected={data?.nationality === "KM"?true: false}>Comoros</option>
                        <option value="CG" selected={data?.nationality === "CG"?true: false}>Congo</option>
                        <option value="CD" selected={data?.nationality === "CD"?true: false}>Congo, the Democratic Republic of the</option>
                        <option value="CK" selected={data?.nationality === "CK"?true: false}>Cook Islands</option>
                        <option value="CR" selected={data?.nationality === "CR"?true: false}>Costa Rica</option>
                        <option value="CI" selected={data?.nationality === "CI"?true: false}>Côte d'Ivoire</option>
                        <option value="HR" selected={data?.nationality === "HR"?true: false}>Croatia</option>
                        <option value="CU" selected={data?.nationality === "CU"?true: false}>Cuba</option>
                        <option value="CW" selected={data?.nationality === "CW"?true: false}>Curaçao</option>
                        <option value="CY" selected={data?.nationality === "CY"?true: false}>Cyprus</option>
                        <option value="CZ" selected={data?.nationality === "CZ"?true: false}>Czech Republic</option>
                        <option value="DK" selected={data?.nationality === "DK"?true: false}>Denmark</option>
                        <option value="DJ" selected={data?.nationality === "DJ"?true: false}>Djibouti</option>
                        <option value="DM" selected={data?.nationality === "DM"?true: false}>Dominica</option>
                        <option value="DO" selected={data?.nationality === "DO"?true: false}>Dominican Republic</option>
                        <option value="EC" selected={data?.nationality === "EC"?true: false}>Ecuador</option>
                        <option value="EG" selected={data?.nationality === "EG"?true: false}>Egypt</option>
                        <option value="SV" selected={data?.nationality === "SV"?true: false}>El Salvador</option>
                        <option value="GQ" selected={data?.nationality === "GQ"?true: false}>Equatorial Guinea</option>
                        <option value="ER" selected={data?.nationality === "ER"?true: false}>Eritrea</option>
                        <option value="EE" selected={data?.nationality === "EE"?true: false}>Estonia</option>
                        <option value="ET" selected={data?.nationality === "ET"?true: false}>Ethiopia</option>
                        <option value="FK" selected={data?.nationality === "FK"?true: false}>Falkland Islands (Malvinas)</option>
                        <option value="FO" selected={data?.nationality === "FO"?true: false}>Faroe Islands</option>
                        <option value="FJ" selected={data?.nationality === "FJ"?true: false}>Fiji</option>
                        <option value="FI" selected={data?.nationality === "FI"?true: false}>Finland</option>
                        <option value="FR" selected={data?.nationality === "FR"?true: false}>France</option>
                        <option value="GF" selected={data?.nationality === "GF"?true: false}>French Guiana</option>
                        <option value="PF" selected={data?.nationality === "PF"?true: false}>French Polynesia</option>
                        <option value="TF" selected={data?.nationality === "TF"?true: false}>French Southern Territories</option>
                        <option value="GA" selected={data?.nationality === "GA"?true: false}>Gabon</option>
                        <option value="GM" selected={data?.nationality === "GM"?true: false}>Gambia</option>
                        <option value="GE" selected={data?.nationality === "GE"?true: false}>Georgia</option>
                        <option value="DE" selected={data?.nationality === "DE"?true: false}>Germany</option>
                        <option value="GH" selected={data?.nationality === "GH"?true: false}>Ghana</option>
                        <option value="GR" selected={data?.nationality === "GR"?true: false}>Gibraltar</option>
                        <option value="GR" selected={data?.nationality === "GR"?true: false}>Greece</option>
                        <option value="GL" selected={data?.nationality === "GL"?true: false}>Greenland</option>
                        <option value="GD" selected={data?.nationality === "GD"?true: false}>Grenada</option>
                        <option value="GP" selected={data?.nationality === "GP"?true: false}>Guadeloupe</option>
                        <option value="GU" selected={data?.nationality === "GU"?true: false}>Guam</option>
                        <option value="GT" selected={data?.nationality === "GT"?true: false}>Guatemala</option>
                        <option value="GG" selected={data?.nationality === "GG"?true: false}>Guernsey</option>
                        <option value="GN" selected={data?.nationality === "GN"?true: false}>Guinea</option>
                        <option value="GW" selected={data?.nationality === "GW"?true: false}>Guinea-Bissau</option>
                        <option value="GY" selected={data?.nationality === "GY"?true: false}>Guyana</option>
                        <option value="HT" selected={data?.nationality === "HT"?true: false}>Haiti</option>
                        <option value="HM" selected={data?.nationality === "HM"?true: false}>Heard Island and McDonald Islands</option>
                        <option value="VA" selected={data?.nationality === "VA"?true: false}>Holy See (Vatican City State)</option>
                        <option value="HN" selected={data?.nationality === "HN"?true: false}>Honduras</option>
                        <option value="HK" selected={data?.nationality === "HK"?true: false}>Hong Kong</option>
                        <option value="HU" selected={data?.nationality === "HU"?true: false}>Hungary</option>
                        <option value="IS" selected={data?.nationality === "IS"?true: false}>Iceland</option>
                        <option value="IN" selected={data?.nationality === "IN"?true: false}>India</option>
                        <option value="ID" selected={data?.nationality === "ID"?true: false}>Indonesia</option>
                        <option value="IR" selected={data?.nationality === "IR"?true: false}>Iran, Islamic Republic of</option>
                        <option value="IQ" selected={data?.nationality === "IQ"?true: false}>Iraq</option>
                        <option value="IE" selected={data?.nationality === "IE"?true: false}>Ireland</option>
                        <option value="IM" selected={data?.nationality === "IM"?true: false}>Isle of Man</option>
                        <option value="IL" selected={data?.nationality === "IL"?true: false}>Israel</option>
                        <option value="IT" selected={data?.nationality === "IT"?true: false}>Italy</option>
                        <option value="JM" selected={data?.nationality === "JM"?true: false}>Jamaica</option>
                        <option value="JP" selected={data?.nationality === "JP"?true: false}>Japan</option>
                        <option value="JE" selected={data?.nationality === "JE"?true: false}>Jersey</option>
                        <option value="JO" selected={data?.nationality === "JO"?true: false}>Jordan</option>
                        <option value="KZ" selected={data?.nationality === "KZ"?true: false}>Kazakhstan</option>
                        <option value="KE" selected={data?.nationality === "KE"?true: false}>Kenya</option>
                        <option value="KI" selected={data?.nationality === "KI"?true: false}>Kiribati</option>
                        <option value="KP" selected={data?.nationality === "KP"?true: false}>Korea, Democratic People's Republic of</option>
                        <option value="KR" selected={data?.nationality === "KR"?true: false}>Korea, Republic of</option>
                        <option value="KW" selected={data?.nationality === "KW"?true: false}>Kuwait</option>
                        <option value="KG" selected={data?.nationality === "KG"?true: false}>Kyrgyzstan</option>
                        <option value="LA" selected={data?.nationality === "LA"?true: false}>Lao People's Democratic Republic</option>
                        <option value="LV" selected={data?.nationality === "LV"?true: false}>Latvia</option>
                        <option value="LB" selected={data?.nationality === "LB"?true: false}>Lebanon</option>
                        <option value="LS" selected={data?.nationality === "LS"?true: false}>Lesotho</option>
                        <option value="LR" selected={data?.nationality === "LR"?true: false}>Liberia</option>
                        <option value="LY" selected={data?.nationality === "LY"?true: false}>Libya</option>
                        <option value="LI" selected={data?.nationality === "LI"?true: false}>Liechtenstein</option>
                        <option value="LT" selected={data?.nationality === "LT"?true: false}>Lithuania</option>
                        <option value="LU" selected={data?.nationality === "LU"?true: false}>Luxembourg</option>
                        <option value="MO" selected={data?.nationality === "MO"?true: false}>Macao</option>
                        <option value="MK" selected={data?.nationality === "MK"?true: false}>Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG" selected={data?.nationality === "MG"?true: false}>Madagascar</option>
                        <option value="MW" selected={data?.nationality === "MW"?true: false}>Malawi</option>
                        <option value="MY" selected={data?.nationality === "MY"?true: false}>Malaysia</option>
                        <option value="MV" selected={data?.nationality === "MV"?true: false}>Maldives</option>
                        <option value="ML" selected={data?.nationality === "ML"?true: false}>Mali</option>
                        <option value="MT" selected={data?.nationality === "MT"?true: false}>Malta</option>
                        <option value="MH" selected={data?.nationality === "MH"?true: false}>Marshall Islands</option>
                        <option value="MQ" selected={data?.nationality === "MQ"?true: false}>Martinique</option>
                        <option value="MR" selected={data?.nationality === "MR"?true: false}>Mauritania</option>
                        <option value="MU" selected={data?.nationality === "MU"?true: false}>Mauritius</option>
                        <option value="YT" selected={data?.nationality === "YT"?true: false}>Mayotte</option>
                        <option value="MX" selected={data?.nationality === "MX"?true: false}>Mexico</option>
                        <option value="FM" selected={data?.nationality === "FM"?true: false}>Micronesia, Federated States of</option>
                        <option value="MD" selected={data?.nationality === "MD"?true: false}>Moldova, Republic of</option>
                        <option value="MC" selected={data?.nationality === "MC"?true: false}>Monaco</option>
                        <option value="MN" selected={data?.nationality === "MN"?true: false}>Mongolia</option>
                        <option value="ME" selected={data?.nationality === "ME"?true: false}>Montenegro</option>
                        <option value="MS" selected={data?.nationality === "MS"?true: false}>Montserrat</option>
                        <option value="MA" selected={data?.nationality === "MA"?true: false}>Morocco</option>
                        <option value="MZ" selected={data?.nationality === "MZ"?true: false}>Mozambique</option>
                        <option value="MM" selected={data?.nationality === "MM"?true: false}>Myanmar</option>
                        <option value="NA" selected={data?.nationality === "NA"?true: false}>Namibia</option>
                        <option value="NR" selected={data?.nationality === "NR"?true: false}>Nauru</option>
                        <option value="NP" selected={data?.nationality === "NP"?true: false}>Nepal</option>
                        <option value="NL" selected={data?.nationality === "NL"?true: false}>Netherlands</option>
                        <option value="NC" selected={data?.nationality === "NC"?true: false}>New Caledonia</option>
                        <option value="NZ" selected={data?.nationality === "NZ"?true: false}>New Zealand</option>
                        <option value="NI" selected={data?.nationality === "NI"?true: false}>Nicaragua</option>
                        <option value="NE" selected={data?.nationality === "NE"?true: false}>Niger</option>
                        <option value="NG" selected={data?.nationality === "NG"?true: false}>Nigeria</option>
                        <option value="NU" selected={data?.nationality === "NU"?true: false}>Niue</option>
                        <option value="NF" selected={data?.nationality === "NF"?true: false}>Norfolk Island</option>
                        <option value="MP" selected={data?.nationality === "MP"?true: false}>Northern Mariana Islands</option>
                        <option value="NO" selected={data?.nationality === "NO"?true: false}>Norway</option>
                        <option value="OM" selected={data?.nationality === "OM"?true: false}>Oman</option>
                        <option value="PK" selected={data?.nationality === "PK"?true: false}>Pakistan</option>
                        <option value="PW" selected={data?.nationality === "PW"?true: false}>Palau</option>
                        <option value="PS" selected={data?.nationality === "PS"?true: false}>Palestinian Territory, Occupied</option>
                        <option value="PA" selected={data?.nationality === "PA"?true: false}>Panama</option>
                        <option value="PG" selected={data?.nationality === "PG"?true: false}>Papua New Guinea</option>
                        <option value="PY" selected={data?.nationality === "PY"?true: false}>Paraguay</option>
                        <option value="PE" selected={data?.nationality === "PE"?true: false}>Peru</option>
                        <option value="PH" selected={data?.nationality === "PH"?true: false}>Philippines</option>
                        <option value="PN" selected={data?.nationality === "PN"?true: false}>Pitcairn</option>
                        <option value="PL" selected={data?.nationality === "PL"?true: false}>Poland</option>
                        <option value="PT" selected={data?.nationality === "PT"?true: false}>Portugal</option>
                        <option value="PR" selected={data?.nationality === "PR"?true: false}>Puerto Rico</option>
                        <option value="QA" selected={data?.nationality === "QA"?true: false}>Qatar</option>
                        <option value="RE" selected={data?.nationality === "RE"?true: false}>Réunion</option>
                        <option value="RO" selected={data?.nationality === "RO"?true: false}>Romania</option>
                        <option value="RU" selected={data?.nationality === "RU"?true: false}>Russian Federation</option>
                        <option value="RW" selected={data?.nationality === "RW"?true: false}>Rwanda</option>
                        <option value="BL" selected={data?.nationality === "BL"?true: false}>Saint Barthélemy</option>
                        <option value="SH" selected={data?.nationality === "SH"?true: false}>Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN" selected={data?.nationality === "KN"?true: false}>Saint Kitts and Nevis</option>
                        <option value="LC" selected={data?.nationality === "LC"?true: false}>Saint Lucia</option>
                        <option value="MF" selected={data?.nationality === "MF"?true: false}>Saint Martin (French part)</option>
                        <option value="PM" selected={data?.nationality === "PM"?true: false}>Saint Pierre and Miquelon</option>
                        <option value="VC" selected={data?.nationality === "VC"?true: false}>Saint Vincent and the Grenadines</option>
                        <option value="WS" selected={data?.nationality === "WS"?true: false}>Samoa</option>
                        <option value="SM" selected={data?.nationality === "SM"?true: false}>San Marino</option>
                        <option value="ST" selected={data?.nationality === "ST"?true: false}>Sao Tome and Principe</option>
                        <option value="SA" selected={data?.nationality === "SA"?true: false}>Saudi Arabia</option>
                        <option value="SN" selected={data?.nationality === "SN"?true: false}>Senegal</option>
                        <option value="RS" selected={data?.nationality === "RS"?true: false}>Serbia</option>
                        <option value="SC" selected={data?.nationality === "SC"?true: false}>Seychelles</option>
                        <option value="SL" selected={data?.nationality === "SL"?true: false}>Sierra Leone</option>
                        <option value="SG" selected={data?.nationality === "SG"?true: false}>Singapore</option>
                        <option value="SX" selected={data?.nationality === "SX"?true: false}>Sint Maarten (Dutch part)</option>
                        <option value="SK" selected={data?.nationality === "SK"?true: false}>Slovakia</option>
                        <option value="SI" selected={data?.nationality === "SI"?true: false}>Slovenia</option>
                        <option value="SB" selected={data?.nationality === "SB"?true: false}>Solomon Islands</option>
                        <option value="SO" selected={data?.nationality === "SO"?true: false}>Somalia</option>
                        <option value="ZA" selected={data?.nationality === "ZA"?true: false}>South Africa</option>
                        <option value="GS" selected={data?.nationality === "GS"?true: false}>South Georgia and the South Sandwich Islands</option>
                        <option value="SS" selected={data?.nationality === "SS"?true: false}>South Sudan</option>
                        <option value="ES" selected={data?.nationality === "ES"?true: false}>Spain</option>
                        <option value="LK" selected={data?.nationality === "LK"?true: false}>Sri Lanka</option>
                        <option value="SD" selected={data?.nationality === "SD"?true: false}>Sudan</option>
                        <option value="SR" selected={data?.nationality === "SR"?true: false}>Suriname</option>
                        <option value="SJ" selected={data?.nationality === "SJ"?true: false}>Svalbard and Jan Mayen</option>
                        <option value="SE" selected={data?.nationality === "SE"?true: false}>Swaziland</option>
                        <option value="SE" selected={data?.nationality === "SE"?true: false}>Sweden</option>
                        <option value="CH" selected={data?.nationality === "CH"?true: false}>Switzerland</option>
                        <option value="SY" selected={data?.nationality === "SY"?true: false}>Syrian Arab Republic</option>
                        <option value="TW" selected={data?.nationality === "TW"?true: false}>Taiwan, Province of China</option>
                        <option value="TJ" selected={data?.nationality === "TJ"?true: false}>Tajikistan</option>
                        <option value="TZ" selected={data?.nationality === "TZ"?true: false}>Tanzania, United Republic of</option>
                        <option value="TH" selected={data?.nationality === "TH"?true: false}>Thailand</option>
                        <option value="TL" selected={data?.nationality === "TL"?true: false}>Timor-Leste</option>
                        <option value="TG" selected={data?.nationality === "TG"?true: false}>Togo</option>
                        <option value="TK" selected={data?.nationality === "TK"?true: false}>Tokelau</option>
                        <option value="TO" selected={data?.nationality === "TO"?true: false}>Tonga</option>
                        <option value="TT" selected={data?.nationality === "TT"?true: false}>Trinidad and Tobago</option>
                        <option value="TN" selected={data?.nationality === "TN"?true: false}>Tunisia</option>
                        <option value="TR" selected={data?.nationality === "TR"?true: false}>Turkey</option>
                        <option value="TM" selected={data?.nationality === "TM"?true: false}>Turkmenistan</option>
                        <option value="TC" selected={data?.nationality === "TC"?true: false}>Turks and Caicos Islands</option>
                        <option value="TV" selected={data?.nationality === "TV"?true: false}>Tuvalu</option>
                        <option value="UG" selected={data?.nationality === "UG"?true: false}>Uganda</option>
                        <option value="UA" selected={data?.nationality === "UA"?true: false}>Ukraine</option>
                        <option value="AE" selected={data?.nationality === "AE"?true: false}>United Arab Emirates</option>
                        <option value="GB" selected={data?.nationality === "GB"?true: false}>United Kingdom</option>
                        <option value="US" selected={data?.nationality === "US"?true: false}>United States</option>
                        <option value="UM" selected={data?.nationality === "UM"?true: false}>United States Minor Outlying Islands</option>
                        <option value="UY" selected={data?.nationality === "UY"?true: false}>Uruguay</option>
                        <option value="UZ" selected={data?.nationality === "UZ"?true: false}>Uzbekistan</option>
                        <option value="VU" selected={data?.nationality === "VU"?true: false}>Vanuatu</option>
                        <option value="VE" selected={data?.nationality === "VE"?true: false}>Venezuela, Bolivarian Republic of</option>
                        <option value="VN" selected={data?.nationality === "VN"?true: false}>Viet Nam</option>
                        <option value="VG" selected={data?.nationality === "VG"?true: false}>Virgin Islands, British</option>
                        <option value="VI" selected={data?.nationality === "VI"?true: false}>Virgin Islands, U.S.</option>
                        <option value="WF" selected={data?.nationality === "WF"?true: false}>Wallis and Futuna</option>
                        <option value="EH" selected={data?.nationality === "EH"?true: false}>Western Sahara</option>
                        <option value="YE" selected={data?.nationality === "YE"?true: false}>Yemen</option>
                        <option value="ZM" selected={data?.nationality === "ZM"?true: false}>Zambia</option>
                        <option value="ZW" selected={data?.nationality === "ZW"?true: false}>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Gender:</label>
                  </div>
                  <div className='custom-radio'>
                    <label>
                        <input
                            type='radio'
                            name="gender"
                            value="1"
                            defaultChecked={data?.gender === "1"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            className='femalinput'
                            type='radio'
                            name="gender"
                            value="0"
                            defaultChecked={data?.gender === "0"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                </div>

                </div>
              </li>
            </ul>
            <div className='parent-header-wrp regismrtop'>
              <div className='reg-heading'><h3>⁠parents</h3></div>
            </div>
            <div className='lines2'></div>
            <ul className='inputlisttop'>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Father’s Full Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield'><input defaultValue={data?.fathersfirstname} ref={fathersfirstname} placeholder='Enter first name' /></div>
                    <div className='inputfield'><input defaultValue={data?.fatherslastname} ref={fatherslastname} placeholder='Enter last name' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Father’s ID:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input defaultValue={data?.fathersid} ref={fathersid} placeholder='Enter ID xxxx xxxx xxxx xxxx' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Father’s Nationality:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <select ref={fathersnationality}>
                        <option value="0">Select nationality</option>
                        <option value="AF" selected={data?.fathersnationality === "AF"?true: false}>Afghanistan</option>
                        <option value="AX" selected={data?.fathersnationality === "AX"?true: false}>Åland Islands</option>
                        <option value="AL" selected={data?.fathersnationality === "AL"?true: false}>Albania</option>
                        <option value="DZ" selected={data?.fathersnationality === "DZ"?true: false}>Algeria</option>
                        <option value="AS" selected={data?.fathersnationality === "AS"?true: false}>American Samoa</option>
                        <option value="AD" selected={data?.fathersnationality === "AD"?true: false}>Andorra</option>
                        <option value="AO" selected={data?.fathersnationality === "AO"?true: false}>Angola</option>
                        <option value="AI" selected={data?.fathersnationality === "AI"?true: false}>Anguilla</option>
                        <option value="AQ" selected={data?.fathersnationality === "AQ"?true: false}>Antarctica</option>
                        <option value="AG" selected={data?.fathersnationality === "AG"?true: false}>Antigua and Barbuda</option>
                        <option value="AR" selected={data?.fathersnationality === "AR"?true: false}>Argentina</option>
                        <option value="AM" selected={data?.fathersnationality === "AM"?true: false}>Armenia</option>
                        <option value="AW" selected={data?.fathersnationality === "AW"?true: false}>Aruba</option>
                        <option value="AU" selected={data?.fathersnationality === "AU"?true: false}>Australia</option>
                        <option value="AT" selected={data?.fathersnationality === "AT"?true: false}>Austria</option>
                        <option value="AZ" selected={data?.fathersnationality === "AZ"?true: false}>Azerbaijan</option>
                        <option value="BS" selected={data?.fathersnationality === "BS"?true: false}>Bahamas</option>
                        <option value="BH" selected={data?.fathersnationality === "BH"?true: false}>Bahrain</option>
                        <option value="BD" selected={data?.fathersnationality === "BD"?true: false}>Bangladesh</option>
                        <option value="BB" selected={data?.fathersnationality === "BB"?true: false}>Barbados</option>
                        <option value="BY" selected={data?.fathersnationality === "BY"?true: false}>Belarus</option>
                        <option value="BE" selected={data?.fathersnationality === "BE"?true: false}>Belgium</option>
                        <option value="BZ" selected={data?.fathersnationality === "BZ"?true: false}>Belize</option>
                        <option value="BJ" selected={data?.fathersnationality === "BJ"?true: false}>Benin</option>
                        <option value="BM" selected={data?.fathersnationality === "BM"?true: false}>Bermuda</option>
                        <option value="BT" selected={data?.fathersnationality === "BT"?true: false}>Bhutan</option>
                        <option value="BO" selected={data?.fathersnationality === "BO"?true: false}>Bolivia, Plurinational State of</option>
                        <option value="BQ" selected={data?.fathersnationality === "BQ"?true: false}>Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA" selected={data?.fathersnationality === "BA"?true: false}>Bosnia and Herzegovina</option>
                        <option value="BW" selected={data?.fathersnationality === "BW"?true: false}>Botswana</option>
                        <option value="BV" selected={data?.fathersnationality === "BV"?true: false}>Bouvet Island</option>
                        <option value="BR" selected={data?.fathersnationality === "BR"?true: false}>Brazil</option>
                        <option value="IO" selected={data?.fathersnationality === "IO"?true: false}>British Indian Ocean Territory</option>
                        <option value="BN" selected={data?.fathersnationality === "BN"?true: false}>Brunei Darussalam</option>
                        <option value="BG" selected={data?.fathersnationality === "BG"?true: false}>Bulgaria</option>
                        <option value="BF" selected={data?.fathersnationality === "BF"?true: false}>Burkina Faso</option>
                        <option value="BI" selected={data?.fathersnationality === "BI"?true: false}>Burundi</option>
                        <option value="KH" selected={data?.fathersnationality === "KH"?true: false}>Cambodia</option>
                        <option value="CM" selected={data?.fathersnationality === "CM"?true: false}>Cameroon</option>
                        <option value="CA" selected={data?.fathersnationality === "CA"?true: false}>Canada</option>
                        <option value="CV" selected={data?.fathersnationality === "CV"?true: false}>Cape Verde</option>
                        <option value="KY" selected={data?.fathersnationality === "KY"?true: false}>Cayman Islands</option>
                        <option value="CF" selected={data?.fathersnationality === "CF"?true: false}>Central African Republic</option>
                        <option value="TD" selected={data?.fathersnationality === "TD"?true: false}>Chad</option>
                        <option value="CL" selected={data?.fathersnationality === "CL"?true: false}>Chile</option>
                        <option value="CN" selected={data?.fathersnationality === "CN"?true: false}>China</option>
                        <option value="CX" selected={data?.fathersnationality === "CX"?true: false}>Christmas Island</option>
                        <option value="CC" selected={data?.fathersnationality === "CC"?true: false}>Cocos (Keeling) Islands</option>
                        <option value="CO" selected={data?.fathersnationality === "CO"?true: false}>Colombia</option>
                        <option value="KM" selected={data?.fathersnationality === "KM"?true: false}>Comoros</option>
                        <option value="CG" selected={data?.fathersnationality === "CG"?true: false}>Congo</option>
                        <option value="CD" selected={data?.fathersnationality === "CD"?true: false}>Congo, the Democratic Republic of the</option>
                        <option value="CK" selected={data?.fathersnationality === "CK"?true: false}>Cook Islands</option>
                        <option value="CR" selected={data?.fathersnationality === "CR"?true: false}>Costa Rica</option>
                        <option value="CI" selected={data?.fathersnationality === "CI"?true: false}>Côte d'Ivoire</option>
                        <option value="HR" selected={data?.fathersnationality === "HR"?true: false}>Croatia</option>
                        <option value="CU" selected={data?.fathersnationality === "CU"?true: false}>Cuba</option>
                        <option value="CW" selected={data?.fathersnationality === "CW"?true: false}>Curaçao</option>
                        <option value="CY" selected={data?.fathersnationality === "CY"?true: false}>Cyprus</option>
                        <option value="CZ" selected={data?.fathersnationality === "CZ"?true: false}>Czech Republic</option>
                        <option value="DK" selected={data?.fathersnationality === "DK"?true: false}>Denmark</option>
                        <option value="DJ" selected={data?.fathersnationality === "DJ"?true: false}>Djibouti</option>
                        <option value="DM" selected={data?.fathersnationality === "DM"?true: false}>Dominica</option>
                        <option value="DO" selected={data?.fathersnationality === "DO"?true: false}>Dominican Republic</option>
                        <option value="EC" selected={data?.fathersnationality === "EC"?true: false}>Ecuador</option>
                        <option value="EG" selected={data?.fathersnationality === "EG"?true: false}>Egypt</option>
                        <option value="SV" selected={data?.fathersnationality === "SV"?true: false}>El Salvador</option>
                        <option value="GQ" selected={data?.fathersnationality === "GQ"?true: false}>Equatorial Guinea</option>
                        <option value="ER" selected={data?.fathersnationality === "ER"?true: false}>Eritrea</option>
                        <option value="EE" selected={data?.fathersnationality === "EE"?true: false}>Estonia</option>
                        <option value="ET" selected={data?.fathersnationality === "ET"?true: false}>Ethiopia</option>
                        <option value="FK" selected={data?.fathersnationality === "FK"?true: false}>Falkland Islands (Malvinas)</option>
                        <option value="FO" selected={data?.fathersnationality === "FO"?true: false}>Faroe Islands</option>
                        <option value="FJ" selected={data?.fathersnationality === "FJ"?true: false}>Fiji</option>
                        <option value="FI" selected={data?.fathersnationality === "FI"?true: false}>Finland</option>
                        <option value="FR" selected={data?.fathersnationality === "FR"?true: false}>France</option>
                        <option value="GF" selected={data?.fathersnationality === "GF"?true: false}>French Guiana</option>
                        <option value="PF" selected={data?.fathersnationality === "PF"?true: false}>French Polynesia</option>
                        <option value="TF" selected={data?.fathersnationality === "TF"?true: false}>French Southern Territories</option>
                        <option value="GA" selected={data?.fathersnationality === "GA"?true: false}>Gabon</option>
                        <option value="GM" selected={data?.fathersnationality === "GM"?true: false}>Gambia</option>
                        <option value="GE" selected={data?.fathersnationality === "GE"?true: false}>Georgia</option>
                        <option value="DE" selected={data?.fathersnationality === "DE"?true: false}>Germany</option>
                        <option value="GH" selected={data?.fathersnationality === "GH"?true: false}>Ghana</option>
                        <option value="GR" selected={data?.fathersnationality === "GR"?true: false}>Gibraltar</option>
                        <option value="GR" selected={data?.fathersnationality === "GR"?true: false}>Greece</option>
                        <option value="GL" selected={data?.fathersnationality === "GL"?true: false}>Greenland</option>
                        <option value="GD" selected={data?.fathersnationality === "GD"?true: false}>Grenada</option>
                        <option value="GP" selected={data?.fathersnationality === "GP"?true: false}>Guadeloupe</option>
                        <option value="GU" selected={data?.fathersnationality === "GU"?true: false}>Guam</option>
                        <option value="GT" selected={data?.fathersnationality === "GT"?true: false}>Guatemala</option>
                        <option value="GG" selected={data?.fathersnationality === "GG"?true: false}>Guernsey</option>
                        <option value="GN" selected={data?.fathersnationality === "GN"?true: false}>Guinea</option>
                        <option value="GW" selected={data?.fathersnationality === "GW"?true: false}>Guinea-Bissau</option>
                        <option value="GY" selected={data?.fathersnationality === "GY"?true: false}>Guyana</option>
                        <option value="HT" selected={data?.fathersnationality === "HT"?true: false}>Haiti</option>
                        <option value="HM" selected={data?.fathersnationality === "HM"?true: false}>Heard Island and McDonald Islands</option>
                        <option value="VA" selected={data?.fathersnationality === "VA"?true: false}>Holy See (Vatican City State)</option>
                        <option value="HN" selected={data?.fathersnationality === "HN"?true: false}>Honduras</option>
                        <option value="HK" selected={data?.fathersnationality === "HK"?true: false}>Hong Kong</option>
                        <option value="HU" selected={data?.fathersnationality === "HU"?true: false}>Hungary</option>
                        <option value="IS" selected={data?.fathersnationality === "IS"?true: false}>Iceland</option>
                        <option value="IN" selected={data?.fathersnationality === "IN"?true: false}>India</option>
                        <option value="ID" selected={data?.fathersnationality === "ID"?true: false}>Indonesia</option>
                        <option value="IR" selected={data?.fathersnationality === "IR"?true: false}>Iran, Islamic Republic of</option>
                        <option value="IQ" selected={data?.fathersnationality === "IQ"?true: false}>Iraq</option>
                        <option value="IE" selected={data?.fathersnationality === "IE"?true: false}>Ireland</option>
                        <option value="IM" selected={data?.fathersnationality === "IM"?true: false}>Isle of Man</option>
                        <option value="IL" selected={data?.fathersnationality === "IL"?true: false}>Israel</option>
                        <option value="IT" selected={data?.fathersnationality === "IT"?true: false}>Italy</option>
                        <option value="JM" selected={data?.fathersnationality === "JM"?true: false}>Jamaica</option>
                        <option value="JP" selected={data?.fathersnationality === "JP"?true: false}>Japan</option>
                        <option value="JE" selected={data?.fathersnationality === "JE"?true: false}>Jersey</option>
                        <option value="JO" selected={data?.fathersnationality === "JO"?true: false}>Jordan</option>
                        <option value="KZ" selected={data?.fathersnationality === "KZ"?true: false}>Kazakhstan</option>
                        <option value="KE" selected={data?.fathersnationality === "KE"?true: false}>Kenya</option>
                        <option value="KI" selected={data?.fathersnationality === "KI"?true: false}>Kiribati</option>
                        <option value="KP" selected={data?.fathersnationality === "KP"?true: false}>Korea, Democratic People's Republic of</option>
                        <option value="KR" selected={data?.fathersnationality === "KR"?true: false}>Korea, Republic of</option>
                        <option value="KW" selected={data?.fathersnationality === "KW"?true: false}>Kuwait</option>
                        <option value="KG" selected={data?.fathersnationality === "KG"?true: false}>Kyrgyzstan</option>
                        <option value="LA" selected={data?.fathersnationality === "LA"?true: false}>Lao People's Democratic Republic</option>
                        <option value="LV" selected={data?.fathersnationality === "LV"?true: false}>Latvia</option>
                        <option value="LB" selected={data?.fathersnationality === "LB"?true: false}>Lebanon</option>
                        <option value="LS" selected={data?.fathersnationality === "LS"?true: false}>Lesotho</option>
                        <option value="LR" selected={data?.fathersnationality === "LR"?true: false}>Liberia</option>
                        <option value="LY" selected={data?.fathersnationality === "LY"?true: false}>Libya</option>
                        <option value="LI" selected={data?.fathersnationality === "LI"?true: false}>Liechtenstein</option>
                        <option value="LT" selected={data?.fathersnationality === "LT"?true: false}>Lithuania</option>
                        <option value="LU" selected={data?.fathersnationality === "LU"?true: false}>Luxembourg</option>
                        <option value="MO" selected={data?.fathersnationality === "MO"?true: false}>Macao</option>
                        <option value="MK" selected={data?.fathersnationality === "MK"?true: false}>Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG" selected={data?.fathersnationality === "MG"?true: false}>Madagascar</option>
                        <option value="MW" selected={data?.fathersnationality === "MW"?true: false}>Malawi</option>
                        <option value="MY" selected={data?.fathersnationality === "MY"?true: false}>Malaysia</option>
                        <option value="MV" selected={data?.fathersnationality === "MV"?true: false}>Maldives</option>
                        <option value="ML" selected={data?.fathersnationality === "ML"?true: false}>Mali</option>
                        <option value="MT" selected={data?.fathersnationality === "MT"?true: false}>Malta</option>
                        <option value="MH" selected={data?.fathersnationality === "MH"?true: false}>Marshall Islands</option>
                        <option value="MQ" selected={data?.fathersnationality === "MQ"?true: false}>Martinique</option>
                        <option value="MR" selected={data?.fathersnationality === "MR"?true: false}>Mauritania</option>
                        <option value="MU" selected={data?.fathersnationality === "MU"?true: false}>Mauritius</option>
                        <option value="YT" selected={data?.fathersnationality === "YT"?true: false}>Mayotte</option>
                        <option value="MX" selected={data?.fathersnationality === "MX"?true: false}>Mexico</option>
                        <option value="FM" selected={data?.fathersnationality === "FM"?true: false}>Micronesia, Federated States of</option>
                        <option value="MD" selected={data?.fathersnationality === "MD"?true: false}>Moldova, Republic of</option>
                        <option value="MC" selected={data?.fathersnationality === "MC"?true: false}>Monaco</option>
                        <option value="MN" selected={data?.fathersnationality === "MN"?true: false}>Mongolia</option>
                        <option value="ME" selected={data?.fathersnationality === "ME"?true: false}>Montenegro</option>
                        <option value="MS" selected={data?.fathersnationality === "MS"?true: false}>Montserrat</option>
                        <option value="MA" selected={data?.fathersnationality === "MA"?true: false}>Morocco</option>
                        <option value="MZ" selected={data?.fathersnationality === "MZ"?true: false}>Mozambique</option>
                        <option value="MM" selected={data?.fathersnationality === "MM"?true: false}>Myanmar</option>
                        <option value="NA" selected={data?.fathersnationality === "NA"?true: false}>Namibia</option>
                        <option value="NR" selected={data?.fathersnationality === "NR"?true: false}>Nauru</option>
                        <option value="NP" selected={data?.fathersnationality === "NP"?true: false}>Nepal</option>
                        <option value="NL" selected={data?.fathersnationality === "NL"?true: false}>Netherlands</option>
                        <option value="NC" selected={data?.fathersnationality === "NC"?true: false}>New Caledonia</option>
                        <option value="NZ" selected={data?.fathersnationality === "NZ"?true: false}>New Zealand</option>
                        <option value="NI" selected={data?.fathersnationality === "NI"?true: false}>Nicaragua</option>
                        <option value="NE" selected={data?.fathersnationality === "NE"?true: false}>Niger</option>
                        <option value="NG" selected={data?.fathersnationality === "NG"?true: false}>Nigeria</option>
                        <option value="NU" selected={data?.fathersnationality === "NU"?true: false}>Niue</option>
                        <option value="NF" selected={data?.fathersnationality === "NF"?true: false}>Norfolk Island</option>
                        <option value="MP" selected={data?.fathersnationality === "MP"?true: false}>Northern Mariana Islands</option>
                        <option value="NO" selected={data?.fathersnationality === "NO"?true: false}>Norway</option>
                        <option value="OM" selected={data?.fathersnationality === "OM"?true: false}>Oman</option>
                        <option value="PK" selected={data?.fathersnationality === "PK"?true: false}>Pakistan</option>
                        <option value="PW" selected={data?.fathersnationality === "PW"?true: false}>Palau</option>
                        <option value="PS" selected={data?.fathersnationality === "PS"?true: false}>Palestinian Territory, Occupied</option>
                        <option value="PA" selected={data?.fathersnationality === "PA"?true: false}>Panama</option>
                        <option value="PG" selected={data?.fathersnationality === "PG"?true: false}>Papua New Guinea</option>
                        <option value="PY" selected={data?.fathersnationality === "PY"?true: false}>Paraguay</option>
                        <option value="PE" selected={data?.fathersnationality === "PE"?true: false}>Peru</option>
                        <option value="PH" selected={data?.fathersnationality === "PH"?true: false}>Philippines</option>
                        <option value="PN" selected={data?.fathersnationality === "PN"?true: false}>Pitcairn</option>
                        <option value="PL" selected={data?.fathersnationality === "PL"?true: false}>Poland</option>
                        <option value="PT" selected={data?.fathersnationality === "PT"?true: false}>Portugal</option>
                        <option value="PR" selected={data?.fathersnationality === "PR"?true: false}>Puerto Rico</option>
                        <option value="QA" selected={data?.fathersnationality === "QA"?true: false}>Qatar</option>
                        <option value="RE" selected={data?.fathersnationality === "RE"?true: false}>Réunion</option>
                        <option value="RO" selected={data?.fathersnationality === "RO"?true: false}>Romania</option>
                        <option value="RU" selected={data?.fathersnationality === "RU"?true: false}>Russian Federation</option>
                        <option value="RW" selected={data?.fathersnationality === "RW"?true: false}>Rwanda</option>
                        <option value="BL" selected={data?.fathersnationality === "BL"?true: false}>Saint Barthélemy</option>
                        <option value="SH" selected={data?.fathersnationality === "SH"?true: false}>Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN" selected={data?.fathersnationality === "KN"?true: false}>Saint Kitts and Nevis</option>
                        <option value="LC" selected={data?.fathersnationality === "LC"?true: false}>Saint Lucia</option>
                        <option value="MF" selected={data?.fathersnationality === "MF"?true: false}>Saint Martin (French part)</option>
                        <option value="PM" selected={data?.fathersnationality === "PM"?true: false}>Saint Pierre and Miquelon</option>
                        <option value="VC" selected={data?.fathersnationality === "VC"?true: false}>Saint Vincent and the Grenadines</option>
                        <option value="WS" selected={data?.fathersnationality === "WS"?true: false}>Samoa</option>
                        <option value="SM" selected={data?.fathersnationality === "SM"?true: false}>San Marino</option>
                        <option value="ST" selected={data?.fathersnationality === "ST"?true: false}>Sao Tome and Principe</option>
                        <option value="SA" selected={data?.fathersnationality === "SA"?true: false}>Saudi Arabia</option>
                        <option value="SN" selected={data?.fathersnationality === "SN"?true: false}>Senegal</option>
                        <option value="RS" selected={data?.fathersnationality === "RS"?true: false}>Serbia</option>
                        <option value="SC" selected={data?.fathersnationality === "SC"?true: false}>Seychelles</option>
                        <option value="SL" selected={data?.fathersnationality === "SL"?true: false}>Sierra Leone</option>
                        <option value="SG" selected={data?.fathersnationality === "SG"?true: false}>Singapore</option>
                        <option value="SX" selected={data?.fathersnationality === "SX"?true: false}>Sint Maarten (Dutch part)</option>
                        <option value="SK" selected={data?.fathersnationality === "SK"?true: false}>Slovakia</option>
                        <option value="SI" selected={data?.fathersnationality === "SI"?true: false}>Slovenia</option>
                        <option value="SB" selected={data?.fathersnationality === "SB"?true: false}>Solomon Islands</option>
                        <option value="SO" selected={data?.fathersnationality === "SO"?true: false}>Somalia</option>
                        <option value="ZA" selected={data?.fathersnationality === "ZA"?true: false}>South Africa</option>
                        <option value="GS" selected={data?.fathersnationality === "GS"?true: false}>South Georgia and the South Sandwich Islands</option>
                        <option value="SS" selected={data?.fathersnationality === "SS"?true: false}>South Sudan</option>
                        <option value="ES" selected={data?.fathersnationality === "ES"?true: false}>Spain</option>
                        <option value="LK" selected={data?.fathersnationality === "LK"?true: false}>Sri Lanka</option>
                        <option value="SD" selected={data?.fathersnationality === "SD"?true: false}>Sudan</option>
                        <option value="SR" selected={data?.fathersnationality === "SR"?true: false}>Suriname</option>
                        <option value="SJ" selected={data?.fathersnationality === "SJ"?true: false}>Svalbard and Jan Mayen</option>
                        <option value="SE" selected={data?.fathersnationality === "SE"?true: false}>Swaziland</option>
                        <option value="SE" selected={data?.fathersnationality === "SE"?true: false}>Sweden</option>
                        <option value="CH" selected={data?.fathersnationality === "CH"?true: false}>Switzerland</option>
                        <option value="SY" selected={data?.fathersnationality === "SY"?true: false}>Syrian Arab Republic</option>
                        <option value="TW" selected={data?.fathersnationality === "TW"?true: false}>Taiwan, Province of China</option>
                        <option value="TJ" selected={data?.fathersnationality === "TJ"?true: false}>Tajikistan</option>
                        <option value="TZ" selected={data?.fathersnationality === "TZ"?true: false}>Tanzania, United Republic of</option>
                        <option value="TH" selected={data?.fathersnationality === "TH"?true: false}>Thailand</option>
                        <option value="TL" selected={data?.fathersnationality === "TL"?true: false}>Timor-Leste</option>
                        <option value="TG" selected={data?.fathersnationality === "TG"?true: false}>Togo</option>
                        <option value="TK" selected={data?.fathersnationality === "TK"?true: false}>Tokelau</option>
                        <option value="TO" selected={data?.fathersnationality === "TO"?true: false}>Tonga</option>
                        <option value="TT" selected={data?.fathersnationality === "TT"?true: false}>Trinidad and Tobago</option>
                        <option value="TN" selected={data?.fathersnationality === "TN"?true: false}>Tunisia</option>
                        <option value="TR" selected={data?.fathersnationality === "TR"?true: false}>Turkey</option>
                        <option value="TM" selected={data?.fathersnationality === "TM"?true: false}>Turkmenistan</option>
                        <option value="TC" selected={data?.fathersnationality === "TC"?true: false}>Turks and Caicos Islands</option>
                        <option value="TV" selected={data?.fathersnationality === "TV"?true: false}>Tuvalu</option>
                        <option value="UG" selected={data?.fathersnationality === "UG"?true: false}>Uganda</option>
                        <option value="UA" selected={data?.fathersnationality === "UA"?true: false}>Ukraine</option>
                        <option value="AE" selected={data?.fathersnationality === "AE"?true: false}>United Arab Emirates</option>
                        <option value="GB" selected={data?.fathersnationality === "GB"?true: false}>United Kingdom</option>
                        <option value="US" selected={data?.fathersnationality === "US"?true: false}>United States</option>
                        <option value="UM" selected={data?.fathersnationality === "UM"?true: false}>United States Minor Outlying Islands</option>
                        <option value="UY" selected={data?.fathersnationality === "UY"?true: false}>Uruguay</option>
                        <option value="UZ" selected={data?.fathersnationality === "UZ"?true: false}>Uzbekistan</option>
                        <option value="VU" selected={data?.fathersnationality === "VU"?true: false}>Vanuatu</option>
                        <option value="VE" selected={data?.fathersnationality === "VE"?true: false}>Venezuela, Bolivarian Republic of</option>
                        <option value="VN" selected={data?.fathersnationality === "VN"?true: false}>Viet Nam</option>
                        <option value="VG" selected={data?.fathersnationality === "VG"?true: false}>Virgin Islands, British</option>
                        <option value="VI" selected={data?.fathersnationality === "VI"?true: false}>Virgin Islands, U.S.</option>
                        <option value="WF" selected={data?.fathersnationality === "WF"?true: false}>Wallis and Futuna</option>
                        <option value="EH" selected={data?.fathersnationality === "EH"?true: false}>Western Sahara</option>
                        <option value="YE" selected={data?.fathersnationality === "YE"?true: false}>Yemen</option>
                        <option value="ZM" selected={data?.fathersnationality === "ZM"?true: false}>Zambia</option>
                        <option value="ZW" selected={data?.fathersnationality === "ZW"?true: false}>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Mother’s Full Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield'><input value={data?.mothersfirstname} ref={mothersfirstname} placeholder='Enter first name' /></div>
                    <div className='inputfield'><input defaultValue={data?.motherslastname} ref={motherslastname} placeholder='Enter last name' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Mother’s ID:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input defaultValue={data?.mothersid} ref={mothersid} placeholder='Enter ID xxxx xxxx xxxx xxxx' /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Mother’s Nationality:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <select ref={mothersnationality}>
                        <option value="0">Select nationality</option>
                        <option value="AF" selected={data?.mothersnationality === "AF"?true: false}>Afghanistan</option>
                        <option value="AX" selected={data?.mothersnationality === "AX"?true: false}>Åland Islands</option>
                        <option value="AL" selected={data?.mothersnationality === "AL"?true: false}>Albania</option>
                        <option value="DZ" selected={data?.mothersnationality === "DZ"?true: false}>Algeria</option>
                        <option value="AS" selected={data?.mothersnationality === "AS"?true: false}>American Samoa</option>
                        <option value="AD" selected={data?.mothersnationality === "AD"?true: false}>Andorra</option>
                        <option value="AO" selected={data?.mothersnationality === "AO"?true: false}>Angola</option>
                        <option value="AI" selected={data?.mothersnationality === "AI"?true: false}>Anguilla</option>
                        <option value="AQ" selected={data?.mothersnationality === "AQ"?true: false}>Antarctica</option>
                        <option value="AG" selected={data?.mothersnationality === "AG"?true: false}>Antigua and Barbuda</option>
                        <option value="AR" selected={data?.mothersnationality === "AR"?true: false}>Argentina</option>
                        <option value="AM" selected={data?.mothersnationality === "AM"?true: false}>Armenia</option>
                        <option value="AW" selected={data?.mothersnationality === "AW"?true: false}>Aruba</option>
                        <option value="AU" selected={data?.mothersnationality === "AU"?true: false}>Australia</option>
                        <option value="AT" selected={data?.mothersnationality === "AT"?true: false}>Austria</option>
                        <option value="AZ" selected={data?.mothersnationality === "AZ"?true: false}>Azerbaijan</option>
                        <option value="BS" selected={data?.mothersnationality === "BS"?true: false}>Bahamas</option>
                        <option value="BH" selected={data?.mothersnationality === "BH"?true: false}>Bahrain</option>
                        <option value="BD" selected={data?.mothersnationality === "BD"?true: false}>Bangladesh</option>
                        <option value="BB" selected={data?.mothersnationality === "BB"?true: false}>Barbados</option>
                        <option value="BY" selected={data?.mothersnationality === "BY"?true: false}>Belarus</option>
                        <option value="BE" selected={data?.mothersnationality === "BE"?true: false}>Belgium</option>
                        <option value="BZ" selected={data?.mothersnationality === "BZ"?true: false}>Belize</option>
                        <option value="BJ" selected={data?.mothersnationality === "BJ"?true: false}>Benin</option>
                        <option value="BM" selected={data?.mothersnationality === "BM"?true: false}>Bermuda</option>
                        <option value="BT" selected={data?.mothersnationality === "BT"?true: false}>Bhutan</option>
                        <option value="BO" selected={data?.mothersnationality === "BO"?true: false}>Bolivia, Plurinational State of</option>
                        <option value="BQ" selected={data?.mothersnationality === "BQ"?true: false}>Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA" selected={data?.mothersnationality === "BA"?true: false}>Bosnia and Herzegovina</option>
                        <option value="BW" selected={data?.mothersnationality === "BW"?true: false}>Botswana</option>
                        <option value="BV" selected={data?.mothersnationality === "BV"?true: false}>Bouvet Island</option>
                        <option value="BR" selected={data?.mothersnationality === "BR"?true: false}>Brazil</option>
                        <option value="IO" selected={data?.mothersnationality === "IO"?true: false}>British Indian Ocean Territory</option>
                        <option value="BN" selected={data?.mothersnationality === "BN"?true: false}>Brunei Darussalam</option>
                        <option value="BG" selected={data?.mothersnationality === "BG"?true: false}>Bulgaria</option>
                        <option value="BF" selected={data?.mothersnationality === "BF"?true: false}>Burkina Faso</option>
                        <option value="BI" selected={data?.mothersnationality === "BI"?true: false}>Burundi</option>
                        <option value="KH" selected={data?.mothersnationality === "KH"?true: false}>Cambodia</option>
                        <option value="CM" selected={data?.mothersnationality === "CM"?true: false}>Cameroon</option>
                        <option value="CA" selected={data?.mothersnationality === "CA"?true: false}>Canada</option>
                        <option value="CV" selected={data?.mothersnationality === "CV"?true: false}>Cape Verde</option>
                        <option value="KY" selected={data?.mothersnationality === "KY"?true: false}>Cayman Islands</option>
                        <option value="CF" selected={data?.mothersnationality === "CF"?true: false}>Central African Republic</option>
                        <option value="TD" selected={data?.mothersnationality === "TD"?true: false}>Chad</option>
                        <option value="CL" selected={data?.mothersnationality === "CL"?true: false}>Chile</option>
                        <option value="CN" selected={data?.mothersnationality === "CN"?true: false}>China</option>
                        <option value="CX" selected={data?.mothersnationality === "CX"?true: false}>Christmas Island</option>
                        <option value="CC" selected={data?.mothersnationality === "CC"?true: false}>Cocos (Keeling) Islands</option>
                        <option value="CO" selected={data?.mothersnationality === "CO"?true: false}>Colombia</option>
                        <option value="KM" selected={data?.mothersnationality === "KM"?true: false}>Comoros</option>
                        <option value="CG" selected={data?.mothersnationality === "CG"?true: false}>Congo</option>
                        <option value="CD" selected={data?.mothersnationality === "CD"?true: false}>Congo, the Democratic Republic of the</option>
                        <option value="CK" selected={data?.mothersnationality === "CK"?true: false}>Cook Islands</option>
                        <option value="CR" selected={data?.mothersnationality === "CR"?true: false}>Costa Rica</option>
                        <option value="CI" selected={data?.mothersnationality === "CI"?true: false}>Côte d'Ivoire</option>
                        <option value="HR" selected={data?.mothersnationality === "HR"?true: false}>Croatia</option>
                        <option value="CU" selected={data?.mothersnationality === "CU"?true: false}>Cuba</option>
                        <option value="CW" selected={data?.mothersnationality === "CW"?true: false}>Curaçao</option>
                        <option value="CY" selected={data?.mothersnationality === "CY"?true: false}>Cyprus</option>
                        <option value="CZ" selected={data?.mothersnationality === "CZ"?true: false}>Czech Republic</option>
                        <option value="DK" selected={data?.mothersnationality === "DK"?true: false}>Denmark</option>
                        <option value="DJ" selected={data?.mothersnationality === "DJ"?true: false}>Djibouti</option>
                        <option value="DM" selected={data?.mothersnationality === "DM"?true: false}>Dominica</option>
                        <option value="DO" selected={data?.mothersnationality === "DO"?true: false}>Dominican Republic</option>
                        <option value="EC" selected={data?.mothersnationality === "EC"?true: false}>Ecuador</option>
                        <option value="EG" selected={data?.mothersnationality === "EG"?true: false}>Egypt</option>
                        <option value="SV" selected={data?.mothersnationality === "SV"?true: false}>El Salvador</option>
                        <option value="GQ" selected={data?.mothersnationality === "GQ"?true: false}>Equatorial Guinea</option>
                        <option value="ER" selected={data?.mothersnationality === "ER"?true: false}>Eritrea</option>
                        <option value="EE" selected={data?.mothersnationality === "EE"?true: false}>Estonia</option>
                        <option value="ET" selected={data?.mothersnationality === "ET"?true: false}>Ethiopia</option>
                        <option value="FK" selected={data?.mothersnationality === "FK"?true: false}>Falkland Islands (Malvinas)</option>
                        <option value="FO" selected={data?.mothersnationality === "FO"?true: false}>Faroe Islands</option>
                        <option value="FJ" selected={data?.mothersnationality === "FJ"?true: false}>Fiji</option>
                        <option value="FI" selected={data?.mothersnationality === "FI"?true: false}>Finland</option>
                        <option value="FR" selected={data?.mothersnationality === "FR"?true: false}>France</option>
                        <option value="GF" selected={data?.mothersnationality === "GF"?true: false}>French Guiana</option>
                        <option value="PF" selected={data?.mothersnationality === "PF"?true: false}>French Polynesia</option>
                        <option value="TF" selected={data?.mothersnationality === "TF"?true: false}>French Southern Territories</option>
                        <option value="GA" selected={data?.mothersnationality === "GA"?true: false}>Gabon</option>
                        <option value="GM" selected={data?.mothersnationality === "GM"?true: false}>Gambia</option>
                        <option value="GE" selected={data?.mothersnationality === "GE"?true: false}>Georgia</option>
                        <option value="DE" selected={data?.mothersnationality === "DE"?true: false}>Germany</option>
                        <option value="GH" selected={data?.mothersnationality === "GH"?true: false}>Ghana</option>
                        <option value="GR" selected={data?.mothersnationality === "GR"?true: false}>Gibraltar</option>
                        <option value="GR" selected={data?.mothersnationality === "GR"?true: false}>Greece</option>
                        <option value="GL" selected={data?.mothersnationality === "GL"?true: false}>Greenland</option>
                        <option value="GD" selected={data?.mothersnationality === "GD"?true: false}>Grenada</option>
                        <option value="GP" selected={data?.mothersnationality === "GP"?true: false}>Guadeloupe</option>
                        <option value="GU" selected={data?.mothersnationality === "GU"?true: false}>Guam</option>
                        <option value="GT" selected={data?.mothersnationality === "GT"?true: false}>Guatemala</option>
                        <option value="GG" selected={data?.mothersnationality === "GG"?true: false}>Guernsey</option>
                        <option value="GN" selected={data?.mothersnationality === "GN"?true: false}>Guinea</option>
                        <option value="GW" selected={data?.mothersnationality === "GW"?true: false}>Guinea-Bissau</option>
                        <option value="GY" selected={data?.mothersnationality === "GY"?true: false}>Guyana</option>
                        <option value="HT" selected={data?.mothersnationality === "HT"?true: false}>Haiti</option>
                        <option value="HM" selected={data?.mothersnationality === "HM"?true: false}>Heard Island and McDonald Islands</option>
                        <option value="VA" selected={data?.mothersnationality === "VA"?true: false}>Holy See (Vatican City State)</option>
                        <option value="HN" selected={data?.mothersnationality === "HN"?true: false}>Honduras</option>
                        <option value="HK" selected={data?.mothersnationality === "HK"?true: false}>Hong Kong</option>
                        <option value="HU" selected={data?.mothersnationality === "HU"?true: false}>Hungary</option>
                        <option value="IS" selected={data?.mothersnationality === "IS"?true: false}>Iceland</option>
                        <option value="IN" selected={data?.mothersnationality === "IN"?true: false}>India</option>
                        <option value="ID" selected={data?.mothersnationality === "ID"?true: false}>Indonesia</option>
                        <option value="IR" selected={data?.mothersnationality === "IR"?true: false}>Iran, Islamic Republic of</option>
                        <option value="IQ" selected={data?.mothersnationality === "IQ"?true: false}>Iraq</option>
                        <option value="IE" selected={data?.mothersnationality === "IE"?true: false}>Ireland</option>
                        <option value="IM" selected={data?.mothersnationality === "IM"?true: false}>Isle of Man</option>
                        <option value="IL" selected={data?.mothersnationality === "IL"?true: false}>Israel</option>
                        <option value="IT" selected={data?.mothersnationality === "IT"?true: false}>Italy</option>
                        <option value="JM" selected={data?.mothersnationality === "JM"?true: false}>Jamaica</option>
                        <option value="JP" selected={data?.mothersnationality === "JP"?true: false}>Japan</option>
                        <option value="JE" selected={data?.mothersnationality === "JE"?true: false}>Jersey</option>
                        <option value="JO" selected={data?.mothersnationality === "JO"?true: false}>Jordan</option>
                        <option value="KZ" selected={data?.mothersnationality === "KZ"?true: false}>Kazakhstan</option>
                        <option value="KE" selected={data?.mothersnationality === "KE"?true: false}>Kenya</option>
                        <option value="KI" selected={data?.mothersnationality === "KI"?true: false}>Kiribati</option>
                        <option value="KP" selected={data?.mothersnationality === "KP"?true: false}>Korea, Democratic People's Republic of</option>
                        <option value="KR" selected={data?.mothersnationality === "KR"?true: false}>Korea, Republic of</option>
                        <option value="KW" selected={data?.mothersnationality === "KW"?true: false}>Kuwait</option>
                        <option value="KG" selected={data?.mothersnationality === "KG"?true: false}>Kyrgyzstan</option>
                        <option value="LA" selected={data?.mothersnationality === "LA"?true: false}>Lao People's Democratic Republic</option>
                        <option value="LV" selected={data?.mothersnationality === "LV"?true: false}>Latvia</option>
                        <option value="LB" selected={data?.mothersnationality === "LB"?true: false}>Lebanon</option>
                        <option value="LS" selected={data?.mothersnationality === "LS"?true: false}>Lesotho</option>
                        <option value="LR" selected={data?.mothersnationality === "LR"?true: false}>Liberia</option>
                        <option value="LY" selected={data?.mothersnationality === "LY"?true: false}>Libya</option>
                        <option value="LI" selected={data?.mothersnationality === "LI"?true: false}>Liechtenstein</option>
                        <option value="LT" selected={data?.mothersnationality === "LT"?true: false}>Lithuania</option>
                        <option value="LU" selected={data?.mothersnationality === "LU"?true: false}>Luxembourg</option>
                        <option value="MO" selected={data?.mothersnationality === "MO"?true: false}>Macao</option>
                        <option value="MK" selected={data?.mothersnationality === "MK"?true: false}>Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG" selected={data?.mothersnationality === "MG"?true: false}>Madagascar</option>
                        <option value="MW" selected={data?.mothersnationality === "MW"?true: false}>Malawi</option>
                        <option value="MY" selected={data?.mothersnationality === "MY"?true: false}>Malaysia</option>
                        <option value="MV" selected={data?.mothersnationality === "MV"?true: false}>Maldives</option>
                        <option value="ML" selected={data?.mothersnationality === "ML"?true: false}>Mali</option>
                        <option value="MT" selected={data?.mothersnationality === "MT"?true: false}>Malta</option>
                        <option value="MH" selected={data?.mothersnationality === "MH"?true: false}>Marshall Islands</option>
                        <option value="MQ" selected={data?.mothersnationality === "MQ"?true: false}>Martinique</option>
                        <option value="MR" selected={data?.mothersnationality === "MR"?true: false}>Mauritania</option>
                        <option value="MU" selected={data?.mothersnationality === "MU"?true: false}>Mauritius</option>
                        <option value="YT" selected={data?.mothersnationality === "YT"?true: false}>Mayotte</option>
                        <option value="MX" selected={data?.mothersnationality === "MX"?true: false}>Mexico</option>
                        <option value="FM" selected={data?.mothersnationality === "FM"?true: false}>Micronesia, Federated States of</option>
                        <option value="MD" selected={data?.mothersnationality === "MD"?true: false}>Moldova, Republic of</option>
                        <option value="MC" selected={data?.mothersnationality === "MC"?true: false}>Monaco</option>
                        <option value="MN" selected={data?.mothersnationality === "MN"?true: false}>Mongolia</option>
                        <option value="ME" selected={data?.mothersnationality === "ME"?true: false}>Montenegro</option>
                        <option value="MS" selected={data?.mothersnationality === "MS"?true: false}>Montserrat</option>
                        <option value="MA" selected={data?.mothersnationality === "MA"?true: false}>Morocco</option>
                        <option value="MZ" selected={data?.mothersnationality === "MZ"?true: false}>Mozambique</option>
                        <option value="MM" selected={data?.mothersnationality === "MM"?true: false}>Myanmar</option>
                        <option value="NA" selected={data?.mothersnationality === "NA"?true: false}>Namibia</option>
                        <option value="NR" selected={data?.mothersnationality === "NR"?true: false}>Nauru</option>
                        <option value="NP" selected={data?.mothersnationality === "NP"?true: false}>Nepal</option>
                        <option value="NL" selected={data?.mothersnationality === "NL"?true: false}>Netherlands</option>
                        <option value="NC" selected={data?.mothersnationality === "NC"?true: false}>New Caledonia</option>
                        <option value="NZ" selected={data?.mothersnationality === "NZ"?true: false}>New Zealand</option>
                        <option value="NI" selected={data?.mothersnationality === "NI"?true: false}>Nicaragua</option>
                        <option value="NE" selected={data?.mothersnationality === "NE"?true: false}>Niger</option>
                        <option value="NG" selected={data?.mothersnationality === "NG"?true: false}>Nigeria</option>
                        <option value="NU" selected={data?.mothersnationality === "NU"?true: false}>Niue</option>
                        <option value="NF" selected={data?.mothersnationality === "NF"?true: false}>Norfolk Island</option>
                        <option value="MP" selected={data?.mothersnationality === "MP"?true: false}>Northern Mariana Islands</option>
                        <option value="NO" selected={data?.mothersnationality === "NO"?true: false}>Norway</option>
                        <option value="OM" selected={data?.mothersnationality === "OM"?true: false}>Oman</option>
                        <option value="PK" selected={data?.mothersnationality === "PK"?true: false}>Pakistan</option>
                        <option value="PW" selected={data?.mothersnationality === "PW"?true: false}>Palau</option>
                        <option value="PS" selected={data?.mothersnationality === "PS"?true: false}>Palestinian Territory, Occupied</option>
                        <option value="PA" selected={data?.mothersnationality === "PA"?true: false}>Panama</option>
                        <option value="PG" selected={data?.mothersnationality === "PG"?true: false}>Papua New Guinea</option>
                        <option value="PY" selected={data?.mothersnationality === "PY"?true: false}>Paraguay</option>
                        <option value="PE" selected={data?.mothersnationality === "PE"?true: false}>Peru</option>
                        <option value="PH" selected={data?.mothersnationality === "PH"?true: false}>Philippines</option>
                        <option value="PN" selected={data?.mothersnationality === "PN"?true: false}>Pitcairn</option>
                        <option value="PL" selected={data?.mothersnationality === "PL"?true: false}>Poland</option>
                        <option value="PT" selected={data?.mothersnationality === "PT"?true: false}>Portugal</option>
                        <option value="PR" selected={data?.mothersnationality === "PR"?true: false}>Puerto Rico</option>
                        <option value="QA" selected={data?.mothersnationality === "QA"?true: false}>Qatar</option>
                        <option value="RE" selected={data?.mothersnationality === "RE"?true: false}>Réunion</option>
                        <option value="RO" selected={data?.mothersnationality === "RO"?true: false}>Romania</option>
                        <option value="RU" selected={data?.mothersnationality === "RU"?true: false}>Russian Federation</option>
                        <option value="RW" selected={data?.mothersnationality === "RW"?true: false}>Rwanda</option>
                        <option value="BL" selected={data?.mothersnationality === "BL"?true: false}>Saint Barthélemy</option>
                        <option value="SH" selected={data?.mothersnationality === "SH"?true: false}>Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN" selected={data?.mothersnationality === "KN"?true: false}>Saint Kitts and Nevis</option>
                        <option value="LC" selected={data?.mothersnationality === "LC"?true: false}>Saint Lucia</option>
                        <option value="MF" selected={data?.mothersnationality === "MF"?true: false}>Saint Martin (French part)</option>
                        <option value="PM" selected={data?.mothersnationality === "PM"?true: false}>Saint Pierre and Miquelon</option>
                        <option value="VC" selected={data?.mothersnationality === "VC"?true: false}>Saint Vincent and the Grenadines</option>
                        <option value="WS" selected={data?.mothersnationality === "WS"?true: false}>Samoa</option>
                        <option value="SM" selected={data?.mothersnationality === "SM"?true: false}>San Marino</option>
                        <option value="ST" selected={data?.mothersnationality === "ST"?true: false}>Sao Tome and Principe</option>
                        <option value="SA" selected={data?.mothersnationality === "SA"?true: false}>Saudi Arabia</option>
                        <option value="SN" selected={data?.mothersnationality === "SN"?true: false}>Senegal</option>
                        <option value="RS" selected={data?.mothersnationality === "RS"?true: false}>Serbia</option>
                        <option value="SC" selected={data?.mothersnationality === "SC"?true: false}>Seychelles</option>
                        <option value="SL" selected={data?.mothersnationality === "SL"?true: false}>Sierra Leone</option>
                        <option value="SG" selected={data?.mothersnationality === "SG"?true: false}>Singapore</option>
                        <option value="SX" selected={data?.mothersnationality === "SX"?true: false}>Sint Maarten (Dutch part)</option>
                        <option value="SK" selected={data?.mothersnationality === "SK"?true: false}>Slovakia</option>
                        <option value="SI" selected={data?.mothersnationality === "SI"?true: false}>Slovenia</option>
                        <option value="SB" selected={data?.mothersnationality === "SB"?true: false}>Solomon Islands</option>
                        <option value="SO" selected={data?.mothersnationality === "SO"?true: false}>Somalia</option>
                        <option value="ZA" selected={data?.mothersnationality === "ZA"?true: false}>South Africa</option>
                        <option value="GS" selected={data?.mothersnationality === "GS"?true: false}>South Georgia and the South Sandwich Islands</option>
                        <option value="SS" selected={data?.mothersnationality === "SS"?true: false}>South Sudan</option>
                        <option value="ES" selected={data?.mothersnationality === "ES"?true: false}>Spain</option>
                        <option value="LK" selected={data?.mothersnationality === "LK"?true: false}>Sri Lanka</option>
                        <option value="SD" selected={data?.mothersnationality === "SD"?true: false}>Sudan</option>
                        <option value="SR" selected={data?.mothersnationality === "SR"?true: false}>Suriname</option>
                        <option value="SJ" selected={data?.mothersnationality === "SJ"?true: false}>Svalbard and Jan Mayen</option>
                        <option value="SE" selected={data?.mothersnationality === "SE"?true: false}>Swaziland</option>
                        <option value="SE" selected={data?.mothersnationality === "SE"?true: false}>Sweden</option>
                        <option value="CH" selected={data?.mothersnationality === "CH"?true: false}>Switzerland</option>
                        <option value="SY" selected={data?.mothersnationality === "SY"?true: false}>Syrian Arab Republic</option>
                        <option value="TW" selected={data?.mothersnationality === "TW"?true: false}>Taiwan, Province of China</option>
                        <option value="TJ" selected={data?.mothersnationality === "TJ"?true: false}>Tajikistan</option>
                        <option value="TZ" selected={data?.mothersnationality === "TZ"?true: false}>Tanzania, United Republic of</option>
                        <option value="TH" selected={data?.mothersnationality === "TH"?true: false}>Thailand</option>
                        <option value="TL" selected={data?.mothersnationality === "TL"?true: false}>Timor-Leste</option>
                        <option value="TG" selected={data?.mothersnationality === "TG"?true: false}>Togo</option>
                        <option value="TK" selected={data?.mothersnationality === "TK"?true: false}>Tokelau</option>
                        <option value="TO" selected={data?.mothersnationality === "TO"?true: false}>Tonga</option>
                        <option value="TT" selected={data?.mothersnationality === "TT"?true: false}>Trinidad and Tobago</option>
                        <option value="TN" selected={data?.mothersnationality === "TN"?true: false}>Tunisia</option>
                        <option value="TR" selected={data?.mothersnationality === "TR"?true: false}>Turkey</option>
                        <option value="TM" selected={data?.mothersnationality === "TM"?true: false}>Turkmenistan</option>
                        <option value="TC" selected={data?.mothersnationality === "TC"?true: false}>Turks and Caicos Islands</option>
                        <option value="TV" selected={data?.mothersnationality === "TV"?true: false}>Tuvalu</option>
                        <option value="UG" selected={data?.mothersnationality === "UG"?true: false}>Uganda</option>
                        <option value="UA" selected={data?.mothersnationality === "UA"?true: false}>Ukraine</option>
                        <option value="AE" selected={data?.mothersnationality === "AE"?true: false}>United Arab Emirates</option>
                        <option value="GB" selected={data?.mothersnationality === "GB"?true: false}>United Kingdom</option>
                        <option value="US" selected={data?.mothersnationality === "US"?true: false}>United States</option>
                        <option value="UM" selected={data?.mothersnationality === "UM"?true: false}>United States Minor Outlying Islands</option>
                        <option value="UY" selected={data?.mothersnationality === "UY"?true: false}>Uruguay</option>
                        <option value="UZ" selected={data?.mothersnationality === "UZ"?true: false}>Uzbekistan</option>
                        <option value="VU" selected={data?.mothersnationality === "VU"?true: false}>Vanuatu</option>
                        <option value="VE" selected={data?.mothersnationality === "VE"?true: false}>Venezuela, Bolivarian Republic of</option>
                        <option value="VN" selected={data?.mothersnationality === "VN"?true: false}>Viet Nam</option>
                        <option value="VG" selected={data?.mothersnationality === "VG"?true: false}>Virgin Islands, British</option>
                        <option value="VI" selected={data?.mothersnationality === "VI"?true: false}>Virgin Islands, U.S.</option>
                        <option value="WF" selected={data?.mothersnationality === "WF"?true: false}>Wallis and Futuna</option>
                        <option value="EH" selected={data?.mothersnationality === "EH"?true: false}>Western Sahara</option>
                        <option value="YE" selected={data?.mothersnationality === "YE"?true: false}>Yemen</option>
                        <option value="ZM" selected={data?.mothersnationality === "ZM"?true: false}>Zambia</option>
                        <option value="ZW" selected={data?.mothersnationality === "ZW"?true: false}>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>

            </ul>

            <div className='parent-header-wrp regismrtop'>
              <div className='reg-heading mobile-reg-heading'><h3>Children: 5 years or less</h3></div>
            </div>
            <div className='lines2'></div>
            {childForms.map((_, index) => (
              <ChildForm
                key={index}
                index={index}
                onRemove={handleRemoveChild}
                onUpdate={handleUpdateChild}
                childDetails={data?.childDetails}
              />
            ))}
          </div>
          <button className='addbtns' onClick={handleAddChild}>Add Child</button>
          {guestForms.map((_, index)=>(
            <Addguest
            key={index}
            index={index}
            onRemove={handleRemoveGuest}
            onUpdate={handleUpdateGuest}
            guestDetails={data?.guestDetails}
          />
          ))}

        <button className='addbtns' onClick={handleAddGuest} disabled = { guestForms?.length === 2 }>Add Guest {guestForms?.length === 0}</button>
          
          <div className='submit-btn'>
            <button onClick={updateregistration}>Update
              {
                Loader && <Box id="loader"></Box>
              }
            </button>
          </div>

        </div>
      </div>
      <Footer />
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
              Registration updated successfully
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* modal */}


    </div>
  );
};

export default Editregistrationlist;

