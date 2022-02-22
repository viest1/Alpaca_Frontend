import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from '../components/templates/HomePage/HomePage';
import Services from '../components/templates/Services/Services';
import SignUp from '../components/templates/SignUp/SignUp';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import MainContainerApp from '../components/templates/MainContainer/MainContainer';
import AboutUs from '../components/templates/AboutUs/AboutUs';
import Contact from '../components/templates/Contact/Contact';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainerApp>
          {/* NOT LOGGED IN VIEW */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/* NOT LOGGED IN VIEW */}

          {/* logged in as Admin view */}
          {/* <Routes> */}
          {/*   <Route path="/" element={<HomePage />} /> */}
          {/* </Routes> */}
          {/* logged in as Admin view */}

          {/* logged in as User view */}
          {/* <Routes> */}
          {/*   <Route path="/" element={<HomePage />} /> */}
          {/* </Routes> */}
          {/* logged in as USER view */}
        </MainContainerApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
