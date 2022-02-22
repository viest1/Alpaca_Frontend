import React, { ReactNode } from 'react';
import Header from '../../organisms/Header/Header';

function MainContainerApp({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainContainerApp;
