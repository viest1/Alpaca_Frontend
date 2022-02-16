import React from 'react';

function Header() {
  interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
  }
  const personA: Person = {
    name: 'John',
    age: 122,
    isDeveloper: true
  };
  const personB: Person = {
    name: 'Tom',
    age: 50,
    isDeveloper: true
  };
  const personC: Person = {
    name: 'Anna',
    age: 23,
    isDeveloper: true
  };
  return (
    <div>
      Hello Alpaca {personA.name} {personB} {personC}
    </div>
  );
}

export default Header;
