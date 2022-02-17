import React from 'react';
import styled from 'styled-components';

export const Alpaca = styled.p`
  background: grey;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: white;
  font-size: 3rem;
`;

function Header() {
  // interface Person {
  //   name: string;
  //   age: number;
  //   isDeveloper: boolean;
  // }
  // const personA: Person = {
  //   name: 'John',
  //   age: 122,
  //   isDeveloper: true
  // };
  // const personB: Person = {
  //   name: 'Tom',
  //   age: 50,
  //   isDeveloper: true
  // };
  // const personC: Person = {
  //   name: 'Anna',
  //   age: 23,
  //   isDeveloper: true
  // };
  return (
    <Alpaca>
      <div>Hamburger Menu</div>
      <a href="/">
        <div>Logo</div>
      </a>
      <a href="/services">
        <div>Services</div>
      </a>
    </Alpaca>
  );
}

export default Header;
