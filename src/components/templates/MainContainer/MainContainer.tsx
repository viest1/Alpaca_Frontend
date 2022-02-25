import React, { ReactNode } from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

interface MainContainer {
  displayTimeToLogout: boolean;
  children: ReactNode;
}

// Component which provide Header to Each Page
function MainContainerApp({ children, displayTimeToLogout }: MainContainer) {
  return (
    <>
      <Header displayTimeToLogout={displayTimeToLogout} />
      {children}
      <Footer />
    </>
  );
}

export default MainContainerApp;
