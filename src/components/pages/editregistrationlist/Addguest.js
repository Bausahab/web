// ChildForm.js
import React, { useState,useEffect } from 'react';

const Addguest = ({ index, onRemove, onUpdate, guestDetails }) => {
  const [guestData, setGuestData] = useState({
    guestfirstname: '',
    guestlastname: '',
    guestid: '',
    guestgender: '',
    guestnationality: ''
  });

  useEffect(() => {
    // Check if childDetails is defined and is an object
    if (guestDetails && typeof guestDetails === 'object') {
      // Update local state when childDetails is a valid object
      setGuestData(...guestDetails);
    }
  }, [guestDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestData({
      ...guestData,
      [name]: value,
    });

    onUpdate(index, {
      ...guestData,
      [name]: value,
    });
  };

  const handleRemoveGuest = () => {
    onRemove(index);
  };

  return (
    <div className='childlistitem'>
      <h4 className='childheading'>Guest {index + 1}</h4>
      <ul className='inputlisttop'>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>First Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <input
                      type="text"
                      name="guestfirstname"
                      value={guestData.guestfirstname}
                      onChange={handleInputChange}
                      placeholder='Enter first name'
                    />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Last Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input
                      type="text"
                      name="guestlastname"
                      placeholder='Enter last name'
                      value={guestData.guestlastname}
                      onChange={handleInputChange}
                    /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>ID:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'> <input placeholder='Enter ID xxxx xxxx xxxx xxxx'
                      type="text"
                      name="guestid"
                      value={guestData.guestid}
                      onChange={handleInputChange}
                    /></div>
                  </div>
                </div>
              </li>
                <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Gender:</label>
                  </div>
                  <div className='inputwrptop'>
                  <div className='inputfield inputwrpsingle'>
                      <select name="guestgender" value={guestData.guestgender}
                      onChange={handleInputChange}>
                        <option value="0">Select gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
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
                      <select  name='guestnationality' value={guestData.guestnationality}
                      onChange={handleInputChange}>
                        <option value="0">Select nationality</option>
                        <option value="AF" selected={guestData?.guestnationality === "AF"?true: false}>Afghanistan</option>
                        <option value="AX" selected={guestData?.guestnationality === "AX"?true: false}>Åland Islands</option>
                        <option value="AL" selected={guestData?.guestnationality === "AL"?true: false}>Albania</option>
                        <option value="DZ" selected={guestData?.guestnationality === "DZ"?true: false}>Algeria</option>
                        <option value="AS" selected={guestData?.guestnationality === "AS"?true: false}>American Samoa</option>
                        <option value="AD" selected={guestData?.guestnationality === "AD"?true: false}>Andorra</option>
                        <option value="AO" selected={guestData?.guestnationality === "AO"?true: false}>Angola</option>
                        <option value="AI" selected={guestData?.guestnationality === "AI"?true: false}>Anguilla</option>
                        <option value="AQ" selected={guestData?.guestnationality === "AQ"?true: false}>Antarctica</option>
                        <option value="AG" selected={guestData?.guestnationality === "AG"?true: false}>Antigua and Barbuda</option>
                        <option value="AR" selected={guestData?.guestnationality === "AR"?true: false}>Argentina</option>
                        <option value="AM" selected={guestData?.guestnationality === "AM"?true: false}>Armenia</option>
                        <option value="AW" selected={guestData?.guestnationality === "AW"?true: false}>Aruba</option>
                        <option value="AU" selected={guestData?.guestnationality === "AU"?true: false}>Australia</option>
                        <option value="AT" selected={guestData?.guestnationality === "AT"?true: false}>Austria</option>
                        <option value="AZ" selected={guestData?.guestnationality === "AZ"?true: false}>Azerbaijan</option>
                        <option value="BS" selected={guestData?.guestnationality === "BS"?true: false}>Bahamas</option>
                        <option value="BH" selected={guestData?.guestnationality === "BH"?true: false}>Bahrain</option>
                        <option value="BD" selected={guestData?.guestnationality === "BD"?true: false}>Bangladesh</option>
                        <option value="BB" selected={guestData?.guestnationality === "BB"?true: false}>Barbados</option>
                        <option value="BY" selected={guestData?.guestnationality === "BY"?true: false}>Belarus</option>
                        <option value="BE" selected={guestData?.guestnationality === "BE"?true: false}>Belgium</option>
                        <option value="BZ" selected={guestData?.guestnationality === "BZ"?true: false}>Belize</option>
                        <option value="BJ" selected={guestData?.guestnationality === "BJ"?true: false}>Benin</option>
                        <option value="BM" selected={guestData?.guestnationality === "BM"?true: false}>Bermuda</option>
                        <option value="BT" selected={guestData?.guestnationality === "BT"?true: false}>Bhutan</option>
                        <option value="BO" selected={guestData?.guestnationality === "BO"?true: false}>Bolivia, Plurinational State of</option>
                        <option value="BQ" selected={guestData?.guestnationality === "BQ"?true: false}>Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA" selected={guestData?.guestnationality === "BA"?true: false}>Bosnia and Herzegovina</option>
                        <option value="BW" selected={guestData?.guestnationality === "BW"?true: false}>Botswana</option>
                        <option value="BV" selected={guestData?.guestnationality === "BV"?true: false}>Bouvet Island</option>
                        <option value="BR" selected={guestData?.guestnationality === "BR"?true: false}>Brazil</option>
                        <option value="IO" selected={guestData?.guestnationality === "IO"?true: false}>British Indian Ocean Territory</option>
                        <option value="BN" selected={guestData?.guestnationality === "BN"?true: false}>Brunei Darussalam</option>
                        <option value="BG" selected={guestData?.guestnationality === "BG"?true: false}>Bulgaria</option>
                        <option value="BF" selected={guestData?.guestnationality === "BF"?true: false}>Burkina Faso</option>
                        <option value="BI" selected={guestData?.guestnationality === "BI"?true: false}>Burundi</option>
                        <option value="KH" selected={guestData?.guestnationality === "KH"?true: false}>Cambodia</option>
                        <option value="CM" selected={guestData?.guestnationality === "CM"?true: false}>Cameroon</option>
                        <option value="CA" selected={guestData?.guestnationality === "CA"?true: false}>Canada</option>
                        <option value="CV" selected={guestData?.guestnationality === "CV"?true: false}>Cape Verde</option>
                        <option value="KY" selected={guestData?.guestnationality === "KY"?true: false}>Cayman Islands</option>
                        <option value="CF" selected={guestData?.guestnationality === "CF"?true: false}>Central African Republic</option>
                        <option value="TD" selected={guestData?.guestnationality === "TD"?true: false}>Chad</option>
                        <option value="CL" selected={guestData?.guestnationality === "CL"?true: false}>Chile</option>
                        <option value="CN" selected={guestData?.guestnationality === "CN"?true: false}>China</option>
                        <option value="CX" selected={guestData?.guestnationality === "CX"?true: false}>Christmas Island</option>
                        <option value="CC" selected={guestData?.guestnationality === "CC"?true: false}>Cocos (Keeling) Islands</option>
                        <option value="CO" selected={guestData?.guestnationality === "CO"?true: false}>Colombia</option>
                        <option value="KM" selected={guestData?.guestnationality === "KM"?true: false}>Comoros</option>
                        <option value="CG" selected={guestData?.guestnationality === "CG"?true: false}>Congo</option>
                        <option value="CD" selected={guestData?.guestnationality === "CD"?true: false}>Congo, the Democratic Republic of the</option>
                        <option value="CK" selected={guestData?.guestnationality === "CK"?true: false}>Cook Islands</option>
                        <option value="CR" selected={guestData?.guestnationality === "CR"?true: false}>Costa Rica</option>
                        <option value="CI" selected={guestData?.guestnationality === "CI"?true: false}>Côte d'Ivoire</option>
                        <option value="HR" selected={guestData?.guestnationality === "HR"?true: false}>Croatia</option>
                        <option value="CU" selected={guestData?.guestnationality === "CU"?true: false}>Cuba</option>
                        <option value="CW" selected={guestData?.guestnationality === "CW"?true: false}>Curaçao</option>
                        <option value="CY" selected={guestData?.guestnationality === "CY"?true: false}>Cyprus</option>
                        <option value="CZ" selected={guestData?.guestnationality === "CZ"?true: false}>Czech Republic</option>
                        <option value="DK" selected={guestData?.guestnationality === "DK"?true: false}>Denmark</option>
                        <option value="DJ" selected={guestData?.guestnationality === "DJ"?true: false}>Djibouti</option>
                        <option value="DM" selected={guestData?.guestnationality === "DM"?true: false}>Dominica</option>
                        <option value="DO" selected={guestData?.guestnationality === "DO"?true: false}>Dominican Republic</option>
                        <option value="EC" selected={guestData?.guestnationality === "EC"?true: false}>Ecuador</option>
                        <option value="EG" selected={guestData?.guestnationality === "EG"?true: false}>Egypt</option>
                        <option value="SV" selected={guestData?.guestnationality === "SV"?true: false}>El Salvador</option>
                        <option value="GQ" selected={guestData?.guestnationality === "GQ"?true: false}>Equatorial Guinea</option>
                        <option value="ER" selected={guestData?.guestnationality === "ER"?true: false}>Eritrea</option>
                        <option value="EE" selected={guestData?.guestnationality === "EE"?true: false}>Estonia</option>
                        <option value="ET" selected={guestData?.guestnationality === "ET"?true: false}>Ethiopia</option>
                        <option value="FK" selected={guestData?.guestnationality === "FK"?true: false}>Falkland Islands (Malvinas)</option>
                        <option value="FO" selected={guestData?.guestnationality === "FO"?true: false}>Faroe Islands</option>
                        <option value="FJ" selected={guestData?.guestnationality === "FJ"?true: false}>Fiji</option>
                        <option value="FI" selected={guestData?.guestnationality === "FI"?true: false}>Finland</option>
                        <option value="FR" selected={guestData?.guestnationality === "FR"?true: false}>France</option>
                        <option value="GF" selected={guestData?.guestnationality === "GF"?true: false}>French Guiana</option>
                        <option value="PF" selected={guestData?.guestnationality === "PF"?true: false}>French Polynesia</option>
                        <option value="TF" selected={guestData?.guestnationality === "TF"?true: false}>French Southern Territories</option>
                        <option value="GA" selected={guestData?.guestnationality === "GA"?true: false}>Gabon</option>
                        <option value="GM" selected={guestData?.guestnationality === "GM"?true: false}>Gambia</option>
                        <option value="GE" selected={guestData?.guestnationality === "GE"?true: false}>Georgia</option>
                        <option value="DE" selected={guestData?.guestnationality === "DE"?true: false}>Germany</option>
                        <option value="GH" selected={guestData?.guestnationality === "GH"?true: false}>Ghana</option>
                        <option value="GR" selected={guestData?.guestnationality === "GR"?true: false}>Gibraltar</option>
                        <option value="GR" selected={guestData?.guestnationality === "GR"?true: false}>Greece</option>
                        <option value="GL" selected={guestData?.guestnationality === "GL"?true: false}>Greenland</option>
                        <option value="GD" selected={guestData?.guestnationality === "GD"?true: false}>Grenada</option>
                        <option value="GP" selected={guestData?.guestnationality === "GP"?true: false}>Guadeloupe</option>
                        <option value="GU" selected={guestData?.guestnationality === "GU"?true: false}>Guam</option>
                        <option value="GT" selected={guestData?.guestnationality === "GT"?true: false}>Guatemala</option>
                        <option value="GG" selected={guestData?.guestnationality === "GG"?true: false}>Guernsey</option>
                        <option value="GN" selected={guestData?.guestnationality === "GN"?true: false}>Guinea</option>
                        <option value="GW" selected={guestData?.guestnationality === "GW"?true: false}>Guinea-Bissau</option>
                        <option value="GY" selected={guestData?.guestnationality === "GY"?true: false}>Guyana</option>
                        <option value="HT" selected={guestData?.guestnationality === "HT"?true: false}>Haiti</option>
                        <option value="HM" selected={guestData?.guestnationality === "HM"?true: false}>Heard Island and McDonald Islands</option>
                        <option value="VA" selected={guestData?.guestnationality === "VA"?true: false}>Holy See (Vatican City State)</option>
                        <option value="HN" selected={guestData?.guestnationality === "HN"?true: false}>Honduras</option>
                        <option value="HK" selected={guestData?.guestnationality === "HK"?true: false}>Hong Kong</option>
                        <option value="HU" selected={guestData?.guestnationality === "HU"?true: false}>Hungary</option>
                        <option value="IS" selected={guestData?.guestnationality === "IS"?true: false}>Iceland</option>
                        <option value="IN" selected={guestData?.guestnationality === "IN"?true: false}>India</option>
                        <option value="ID" selected={guestData?.guestnationality === "ID"?true: false}>Indonesia</option>
                        <option value="IR" selected={guestData?.guestnationality === "IR"?true: false}>Iran, Islamic Republic of</option>
                        <option value="IQ" selected={guestData?.guestnationality === "IQ"?true: false}>Iraq</option>
                        <option value="IE" selected={guestData?.guestnationality === "IE"?true: false}>Ireland</option>
                        <option value="IM" selected={guestData?.guestnationality === "IM"?true: false}>Isle of Man</option>
                        <option value="IL" selected={guestData?.guestnationality === "IL"?true: false}>Israel</option>
                        <option value="IT" selected={guestData?.guestnationality === "IT"?true: false}>Italy</option>
                        <option value="JM" selected={guestData?.guestnationality === "JM"?true: false}>Jamaica</option>
                        <option value="JP" selected={guestData?.guestnationality === "JP"?true: false}>Japan</option>
                        <option value="JE" selected={guestData?.guestnationality === "JE"?true: false}>Jersey</option>
                        <option value="JO" selected={guestData?.guestnationality === "JO"?true: false}>Jordan</option>
                        <option value="KZ" selected={guestData?.guestnationality === "KZ"?true: false}>Kazakhstan</option>
                        <option value="KE" selected={guestData?.guestnationality === "KE"?true: false}>Kenya</option>
                        <option value="KI" selected={guestData?.guestnationality === "KI"?true: false}>Kiribati</option>
                        <option value="KP" selected={guestData?.guestnationality === "KP"?true: false}>Korea, Democratic People's Republic of</option>
                        <option value="KR" selected={guestData?.guestnationality === "KR"?true: false}>Korea, Republic of</option>
                        <option value="KW" selected={guestData?.guestnationality === "KW"?true: false}>Kuwait</option>
                        <option value="KG" selected={guestData?.guestnationality === "KG"?true: false}>Kyrgyzstan</option>
                        <option value="LA" selected={guestData?.guestnationality === "LA"?true: false}>Lao People's Democratic Republic</option>
                        <option value="LV" selected={guestData?.guestnationality === "LV"?true: false}>Latvia</option>
                        <option value="LB" selected={guestData?.guestnationality === "LB"?true: false}>Lebanon</option>
                        <option value="LS" selected={guestData?.guestnationality === "LS"?true: false}>Lesotho</option>
                        <option value="LR" selected={guestData?.guestnationality === "LR"?true: false}>Liberia</option>
                        <option value="LY" selected={guestData?.guestnationality === "LY"?true: false}>Libya</option>
                        <option value="LI" selected={guestData?.guestnationality === "LI"?true: false}>Liechtenstein</option>
                        <option value="LT" selected={guestData?.guestnationality === "LT"?true: false}>Lithuania</option>
                        <option value="LU" selected={guestData?.guestnationality === "LU"?true: false}>Luxembourg</option>
                        <option value="MO" selected={guestData?.guestnationality === "MO"?true: false}>Macao</option>
                        <option value="MK" selected={guestData?.guestnationality === "MK"?true: false}>Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG" selected={guestData?.guestnationality === "MG"?true: false}>Madagascar</option>
                        <option value="MW" selected={guestData?.guestnationality === "MW"?true: false}>Malawi</option>
                        <option value="MY" selected={guestData?.guestnationality === "MY"?true: false}>Malaysia</option>
                        <option value="MV" selected={guestData?.guestnationality === "MV"?true: false}>Maldives</option>
                        <option value="ML" selected={guestData?.guestnationality === "ML"?true: false}>Mali</option>
                        <option value="MT" selected={guestData?.guestnationality === "MT"?true: false}>Malta</option>
                        <option value="MH" selected={guestData?.guestnationality === "MH"?true: false}>Marshall Islands</option>
                        <option value="MQ" selected={guestData?.guestnationality === "MQ"?true: false}>Martinique</option>
                        <option value="MR" selected={guestData?.guestnationality === "MR"?true: false}>Mauritania</option>
                        <option value="MU" selected={guestData?.guestnationality === "MU"?true: false}>Mauritius</option>
                        <option value="YT" selected={guestData?.guestnationality === "YT"?true: false}>Mayotte</option>
                        <option value="MX" selected={guestData?.guestnationality === "MX"?true: false}>Mexico</option>
                        <option value="FM" selected={guestData?.guestnationality === "FM"?true: false}>Micronesia, Federated States of</option>
                        <option value="MD" selected={guestData?.guestnationality === "MD"?true: false}>Moldova, Republic of</option>
                        <option value="MC" selected={guestData?.guestnationality === "MC"?true: false}>Monaco</option>
                        <option value="MN" selected={guestData?.guestnationality === "MN"?true: false}>Mongolia</option>
                        <option value="ME" selected={guestData?.guestnationality === "ME"?true: false}>Montenegro</option>
                        <option value="MS" selected={guestData?.guestnationality === "MS"?true: false}>Montserrat</option>
                        <option value="MA" selected={guestData?.guestnationality === "MA"?true: false}>Morocco</option>
                        <option value="MZ" selected={guestData?.guestnationality === "MZ"?true: false}>Mozambique</option>
                        <option value="MM" selected={guestData?.guestnationality === "MM"?true: false}>Myanmar</option>
                        <option value="NA" selected={guestData?.guestnationality === "NA"?true: false}>Namibia</option>
                        <option value="NR" selected={guestData?.guestnationality === "NR"?true: false}>Nauru</option>
                        <option value="NP" selected={guestData?.guestnationality === "NP"?true: false}>Nepal</option>
                        <option value="NL" selected={guestData?.guestnationality === "NL"?true: false}>Netherlands</option>
                        <option value="NC" selected={guestData?.guestnationality === "NC"?true: false}>New Caledonia</option>
                        <option value="NZ" selected={guestData?.guestnationality === "NZ"?true: false}>New Zealand</option>
                        <option value="NI" selected={guestData?.guestnationality === "NI"?true: false}>Nicaragua</option>
                        <option value="NE" selected={guestData?.guestnationality === "NE"?true: false}>Niger</option>
                        <option value="NG" selected={guestData?.guestnationality === "NG"?true: false}>Nigeria</option>
                        <option value="NU" selected={guestData?.guestnationality === "NU"?true: false}>Niue</option>
                        <option value="NF" selected={guestData?.guestnationality === "NF"?true: false}>Norfolk Island</option>
                        <option value="MP" selected={guestData?.guestnationality === "MP"?true: false}>Northern Mariana Islands</option>
                        <option value="NO" selected={guestData?.guestnationality === "NO"?true: false}>Norway</option>
                        <option value="OM" selected={guestData?.guestnationality === "OM"?true: false}>Oman</option>
                        <option value="PK" selected={guestData?.guestnationality === "PK"?true: false}>Pakistan</option>
                        <option value="PW" selected={guestData?.guestnationality === "PW"?true: false}>Palau</option>
                        <option value="PS" selected={guestData?.guestnationality === "PS"?true: false}>Palestinian Territory, Occupied</option>
                        <option value="PA" selected={guestData?.guestnationality === "PA"?true: false}>Panama</option>
                        <option value="PG" selected={guestData?.guestnationality === "PG"?true: false}>Papua New Guinea</option>
                        <option value="PY" selected={guestData?.guestnationality === "PY"?true: false}>Paraguay</option>
                        <option value="PE" selected={guestData?.guestnationality === "PE"?true: false}>Peru</option>
                        <option value="PH" selected={guestData?.guestnationality === "PH"?true: false}>Philippines</option>
                        <option value="PN" selected={guestData?.guestnationality === "PN"?true: false}>Pitcairn</option>
                        <option value="PL" selected={guestData?.guestnationality === "PL"?true: false}>Poland</option>
                        <option value="PT" selected={guestData?.guestnationality === "PT"?true: false}>Portugal</option>
                        <option value="PR" selected={guestData?.guestnationality === "PR"?true: false}>Puerto Rico</option>
                        <option value="QA" selected={guestData?.guestnationality === "QA"?true: false}>Qatar</option>
                        <option value="RE" selected={guestData?.guestnationality === "RE"?true: false}>Réunion</option>
                        <option value="RO" selected={guestData?.guestnationality === "RO"?true: false}>Romania</option>
                        <option value="RU" selected={guestData?.guestnationality === "RU"?true: false}>Russian Federation</option>
                        <option value="RW" selected={guestData?.guestnationality === "RW"?true: false}>Rwanda</option>
                        <option value="BL" selected={guestData?.guestnationality === "BL"?true: false}>Saint Barthélemy</option>
                        <option value="SH" selected={guestData?.guestnationality === "SH"?true: false}>Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN" selected={guestData?.guestnationality === "KN"?true: false}>Saint Kitts and Nevis</option>
                        <option value="LC" selected={guestData?.guestnationality === "LC"?true: false}>Saint Lucia</option>
                        <option value="MF" selected={guestData?.guestnationality === "MF"?true: false}>Saint Martin (French part)</option>
                        <option value="PM" selected={guestData?.guestnationality === "PM"?true: false}>Saint Pierre and Miquelon</option>
                        <option value="VC" selected={guestData?.guestnationality === "VC"?true: false}>Saint Vincent and the Grenadines</option>
                        <option value="WS" selected={guestData?.guestnationality === "WS"?true: false}>Samoa</option>
                        <option value="SM" selected={guestData?.guestnationality === "SM"?true: false}>San Marino</option>
                        <option value="ST" selected={guestData?.guestnationality === "ST"?true: false}>Sao Tome and Principe</option>
                        <option value="SA" selected={guestData?.guestnationality === "SA"?true: false}>Saudi Arabia</option>
                        <option value="SN" selected={guestData?.guestnationality === "SN"?true: false}>Senegal</option>
                        <option value="RS" selected={guestData?.guestnationality === "RS"?true: false}>Serbia</option>
                        <option value="SC" selected={guestData?.guestnationality === "SC"?true: false}>Seychelles</option>
                        <option value="SL" selected={guestData?.guestnationality === "SL"?true: false}>Sierra Leone</option>
                        <option value="SG" selected={guestData?.guestnationality === "SG"?true: false}>Singapore</option>
                        <option value="SX" selected={guestData?.guestnationality === "SX"?true: false}>Sint Maarten (Dutch part)</option>
                        <option value="SK" selected={guestData?.guestnationality === "SK"?true: false}>Slovakia</option>
                        <option value="SI" selected={guestData?.guestnationality === "SI"?true: false}>Slovenia</option>
                        <option value="SB" selected={guestData?.guestnationality === "SB"?true: false}>Solomon Islands</option>
                        <option value="SO" selected={guestData?.guestnationality === "SO"?true: false}>Somalia</option>
                        <option value="ZA" selected={guestData?.guestnationality === "ZA"?true: false}>South Africa</option>
                        <option value="GS" selected={guestData?.guestnationality === "GS"?true: false}>South Georgia and the South Sandwich Islands</option>
                        <option value="SS" selected={guestData?.guestnationality === "SS"?true: false}>South Sudan</option>
                        <option value="ES" selected={guestData?.guestnationality === "ES"?true: false}>Spain</option>
                        <option value="LK" selected={guestData?.guestnationality === "LK"?true: false}>Sri Lanka</option>
                        <option value="SD" selected={guestData?.guestnationality === "SD"?true: false}>Sudan</option>
                        <option value="SR" selected={guestData?.guestnationality === "SR"?true: false}>Suriname</option>
                        <option value="SJ" selected={guestData?.guestnationality === "SJ"?true: false}>Svalbard and Jan Mayen</option>
                        <option value="SE" selected={guestData?.guestnationality === "SE"?true: false}>Swaziland</option>
                        <option value="SE" selected={guestData?.guestnationality === "SE"?true: false}>Sweden</option>
                        <option value="CH" selected={guestData?.guestnationality === "CH"?true: false}>Switzerland</option>
                        <option value="SY" selected={guestData?.guestnationality === "SY"?true: false}>Syrian Arab Republic</option>
                        <option value="TW" selected={guestData?.guestnationality === "TW"?true: false}>Taiwan, Province of China</option>
                        <option value="TJ" selected={guestData?.guestnationality === "TJ"?true: false}>Tajikistan</option>
                        <option value="TZ" selected={guestData?.guestnationality === "TZ"?true: false}>Tanzania, United Republic of</option>
                        <option value="TH" selected={guestData?.guestnationality === "TH"?true: false}>Thailand</option>
                        <option value="TL" selected={guestData?.guestnationality === "TL"?true: false}>Timor-Leste</option>
                        <option value="TG" selected={guestData?.guestnationality === "TG"?true: false}>Togo</option>
                        <option value="TK" selected={guestData?.guestnationality === "TK"?true: false}>Tokelau</option>
                        <option value="TO" selected={guestData?.guestnationality === "TO"?true: false}>Tonga</option>
                        <option value="TT" selected={guestData?.guestnationality === "TT"?true: false}>Trinidad and Tobago</option>
                        <option value="TN" selected={guestData?.guestnationality === "TN"?true: false}>Tunisia</option>
                        <option value="TR" selected={guestData?.guestnationality === "TR"?true: false}>Turkey</option>
                        <option value="TM" selected={guestData?.guestnationality === "TM"?true: false}>Turkmenistan</option>
                        <option value="TC" selected={guestData?.guestnationality === "TC"?true: false}>Turks and Caicos Islands</option>
                        <option value="TV" selected={guestData?.guestnationality === "TV"?true: false}>Tuvalu</option>
                        <option value="UG" selected={guestData?.guestnationality === "UG"?true: false}>Uganda</option>
                        <option value="UA" selected={guestData?.guestnationality === "UA"?true: false}>Ukraine</option>
                        <option value="AE" selected={guestData?.guestnationality === "AE"?true: false}>United Arab Emirates</option>
                        <option value="GB" selected={guestData?.guestnationality === "GB"?true: false}>United Kingdom</option>
                        <option value="US" selected={guestData?.guestnationality === "US"?true: false}>United States</option>
                        <option value="UM" selected={guestData?.guestnationality === "UM"?true: false}>United States Minor Outlying Islands</option>
                        <option value="UY" selected={guestData?.guestnationality === "UY"?true: false}>Uruguay</option>
                        <option value="UZ" selected={guestData?.guestnationality === "UZ"?true: false}>Uzbekistan</option>
                        <option value="VU" selected={guestData?.guestnationality === "VU"?true: false}>Vanuatu</option>
                        <option value="VE" selected={guestData?.guestnationality === "VE"?true: false}>Venezuela, Bolivarian Republic of</option>
                        <option value="VN" selected={guestData?.guestnationality === "VN"?true: false}>Viet Nam</option>
                        <option value="VG" selected={guestData?.guestnationality === "VG"?true: false}>Virgin Islands, British</option>
                        <option value="VI" selected={guestData?.guestnationality === "VI"?true: false}>Virgin Islands, U.S.</option>
                        <option value="WF" selected={guestData?.guestnationality === "WF"?true: false}>Wallis and Futuna</option>
                        <option value="EH" selected={guestData?.guestnationality === "EH"?true: false}>Western Sahara</option>
                        <option value="YE" selected={guestData?.guestnationality === "YE"?true: false}>Yemen</option>
                        <option value="ZM" selected={guestData?.guestnationality === "ZM"?true: false}>Zambia</option>
                        <option value="ZW" selected={guestData?.guestnationality === "ZW"?true: false}>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                </li>
            </ul>
        <div className='wrpremovebtn'><button className='removebtn' onClick={handleRemoveGuest}>Remove Guest</button></div>
    </div>
  );
};

export default Addguest;
