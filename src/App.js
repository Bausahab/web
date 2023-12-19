import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import './Style/style.css';
import './Style/responsive.css';
import LogIn from "./components/LogIn/LogIn";
import Privateroutelogin from "./components/Privateroutelogin";
import Privateroute from "./components/Privateroute";
import Dashboard2 from "./components/dashboard/Dashboard2";
import VisitingDashboard from "./components/dashboard/VisitingDashboard";
import RegistrationlistDashboard from "./components/dashboard/RegistrationlistDashboard";
import EditregistrationDashboard from "./components/dashboard/EditregistrationDashboard";
// import { useTranslation  } from 'react-i18next';
import './index.css';
 

function App() {
    // const { t, i18n } = useTranslation();
    // document.body.dir = i18n.dir();

    return (

    <BrowserRouter>
      <Routes>
        <Route path="" element={<Privateroute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard2 />} />
          <Route path="/visiting" element={<VisitingDashboard />} />
          <Route path="/registrationlist" element={<RegistrationlistDashboard />} />
          <Route path="/edit/registration/:id" element={<EditregistrationDashboard />} />
        </Route>
        <Route path="" element={<Privateroutelogin />}>
                    <Route path="/login" element={<LogIn />} />
                    {/* <div className="App">
                        {t('LoginName'),t('Email'),t('Password'),t('Login')}
                    </div> */}
        </Route>
      </Routes>
      </BrowserRouter>
      
    
  );
}


export default (App);

//.export default App;
