import React from 'react';

function Button() {
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
  return <div>Hello Alpaca {personA.name}</div>;
}

export default Button;
