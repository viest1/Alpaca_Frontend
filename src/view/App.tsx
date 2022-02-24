import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from '../components/templates/HomePage/HomePage';
import Services from '../components/templates/Services/Services';
import SignUp from '../components/templates/SignUp/SignUp';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import MainContainerApp from '../components/templates/MainContainer/MainContainer';
import AboutUs from '../components/templates/AboutUs/AboutUs';
import Contact from '../components/templates/Contact/Contact';
import LogIn from '../components/templates/Login/LogIn';
import AdminDashboard from '../components/templates/Admin_Dashboard/Admin_Dashboard';
import UserDashboard from '../components/templates/User_Dashboard/UserDashboard';
import { Context } from '../providers/GeneralProvider';
import ClientsOrProjects from '../components/templates/Admin_ClientsOrProjects/ClientsOrProjects';
import Settings from '../components/templates/Settings/Settings';
import NewClient from '../components/templates/Admin_NewClient/NewClient';
import Projects from '../components/templates/User_Projects/Projects';

function App(): JSX.Element {
  const [displayTimeToLogout, setDisplayTimeToLogout] = useState(false);
  const { userData, setUserData } = useContext(Context);
  const { token, role } = userData;
  const navigate = useNavigate();
  useEffect(() => {
    let interval: any;
    // When entering the website, check whether the token's time has expired
    if (Date.now() > userData.exp) {
      setUserData({
        token: '',
        role: '',
        email: '',
        name: '',
        exp: '',
        userId: ''
      });
      navigate('/');
    }
    // If token exist check whether the token is close to expiration ( < 30s )
    if (userData.token) {
      interval = setInterval(() => {
        // If yes then Display Message About It
        if (+userData.exp - Date.now() < 30000) {
          // TODO Implement displaying Message
          setDisplayTimeToLogout(true);
          clearInterval(interval);
        }
        // If Token expired Clear UserData and Logout User/Admin
        if (Date.now() > userData.exp) {
          setUserData({
            token: '',
            role: '',
            email: '',
            name: '',
            exp: '',
            userId: ''
          });
          navigate('/login');
          setDisplayTimeToLogout(false);
        }
        console.log('Left', ((userData.exp - Date.now()) / 1000).toFixed(0), 's To Logout');
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.exp]);

  console.log({ token, role });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainerApp displayTimeToLogout={displayTimeToLogout}>
        {token && role === 'Freelancer' ? (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/clients" element={<ClientsOrProjects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/newClient" element={<NewClient />} />
          </Routes>
        ) : token && role === 'Client' ? (
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        )}
      </MainContainerApp>
    </ThemeProvider>
  );
}

export default App;
