import React, { ReactNode } from 'react';
import Header from '../../organisms/Header/Header';

// Component which provide Header to Each Page
function MainContainerApp({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainContainerApp;
