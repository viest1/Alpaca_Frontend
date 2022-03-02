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
import VerifyEmail from '../components/molecules/VerifyEmail/VerifyEmail';
import ForgotPassword from '../components/molecules/ForgotPassword/ForgotPassword';
import ResetPassword from '../components/molecules/ResetPassword/ResetPassword';
import Statistics from '../components/templates/Admin_Statistics/Statistics';
import ClientDetail from '../components/organisms/ClientDetail/ClientDetails';
import ProjectDetail from '../components/organisms/ProjectDetail/ProjectDetails';
import Messages from '../components/templates/Messages/Messages';
import NewProject from '../components/templates/Admin_NewProject/NewProject';

function App(): JSX.Element {
  const [displayTimeToLogout, setDisplayTimeToLogout] = useState(false);
  const { userData, setUserData, setMessages } = useContext(Context);
  const { token, role } = userData;
  const navigate = useNavigate();
  useEffect(() => {
    let interval: any;
    if (userData.token) {
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
            setDisplayTimeToLogout(true);
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
            clearInterval(interval);
          }
          console.log('Left', ((userData.exp - Date.now()) / 1000).toFixed(0), 's To Logout');
        }, 5000);
      } else {
        clearInterval(interval);
      }
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.exp]);

  const [listening, setListening] = useState(false);

  useEffect(() => {
    const connectSSE = async () => {
      if (token) {
        if (!listening) {
          console.log('I try listening SSE...');
          const events = new EventSource(`${process.env.REACT_APP_BACKEND}/events/${token}`);

          events.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            // console.log('Parsed', parsedData)
            setMessages((messagesItems) => messagesItems.concat(parsedData));
          };

          events.onerror = (e) => {
            console.log('SSE ERROR', e);
          };

          events.onopen = () => {
            console.log('Connection works ...');
          };

          setListening(true);
        }
      } else {
        setMessages([]);
        setListening(false);
      }
    };
    connectSSE().then(() => {
      console.log('i used the function to connect SSE');
    });
  }, [listening, token]);

  // console.log(messages);

  // console.log({ token, role });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainerApp displayTimeToLogout={displayTimeToLogout}>
        {token && role === 'Freelancer' ? (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/clients" element={<ClientsOrProjects />} />
            <Route path="/client/:clientId" element={<ClientDetail />} /> {/* TODO */}
            <Route path="/project/:projectId" element={<ProjectDetail />} /> {/* TODO */}
            <Route path="/settings" element={<Settings />} /> {/* TODO */}
            <Route path="/statistics" element={<Statistics />} /> {/* TODO */}
            <Route path="/messages" element={<Messages />} /> {/* TODO */}
            <Route path="/newClient" element={<NewClient />} /> {/* TODO */}
            <Route path="/newProject/:clientId" element={<NewProject />} /> {/* TODO */}
          </Routes>
        ) : token && role === 'Client' ? (
          <Routes>
            <Route path="/" element={<UserDashboard />} /> {/* TODO */}
            <Route path="/projects" element={<Projects />} /> {/* TODO */}
            <Route path="/project/:projectId" element={<ProjectDetail />} /> {/* TODO */}
            <Route path="/freelancer/:freelancerId" element={<ClientDetail />} /> {/* TODO */}
            <Route path="/messages" element={<Messages />} /> {/* TODO */}
            <Route path="/settings" element={<Settings />} /> {/* TODO */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} /> {/* TODO */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
            <Route path="/forgotPassword/" element={<ForgotPassword />} />
            <Route path="/forgotPassword/:token" element={<ResetPassword />} />
          </Routes>
        )}
      </MainContainerApp>
    </ThemeProvider>
  );
}

export default App;
