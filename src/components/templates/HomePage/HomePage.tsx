import React from 'react';
import Header from '../../organisms/Header/Header';
import HeroSection from '../../organisms/HeroSection/HeroSection';

function HomePage() {
  // Example
  // interface Person {
  //   name: string;
  //   age: number;
  //   isDeveloper: boolean;
  // }
  //
  // const personA: Person = {
  //   name: 'John',
  //   age: 122,
  //   isDeveloper: true
  // };

  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default HomePage;
