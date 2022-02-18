import React from 'react';
// import styled from 'styled-components';
import Header from '../../organisms/Header/Header';

// const Box = styled.div`
//   display: block;
//   padding: 2rem;
//   background: blue;
// `;

// <div className={'box'}>Services</div>

function Menu() {
  return (
    <div>
      <Header />
      <div style={{ display: 'block', padding: '2rem', background: 'blue' }}>Services</div>
    </div>
  );
}

export default Menu;
