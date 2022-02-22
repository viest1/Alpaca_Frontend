import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from '../components/templates/HomePage/HomePage';
import Services from '../components/templates/Services/Services';
import SignUp from '../components/templates/SignUp/SignUp';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import MainContainerApp from '../components/templates/MainContainer/MainContainer';

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutUs" element={<SignUp />} />
            <Route path="/services" element={<SignUp />} />
            <Route path="/contact" element={<SignUp />} />
          </Routes>
          {/* NOT LOGGED IN VIEW */}
        </MainContainerApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
