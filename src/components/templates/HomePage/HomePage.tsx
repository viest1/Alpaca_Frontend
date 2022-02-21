import React from 'react';
import Header from '../../organisms/Header/Header';
import HeroSection from '../../organisms/HeroSection/HeroSection';
import SectionProductDesc1 from '../../organisms/SectionProductDesc1/SectionProductDesc1';
import SectionProductDesc2 from '../../organisms/SectionProductDesc2/SectionProductDesc2';
import SectionProductDesc3 from '../../organisms/SectionProductDesc3/SectionProductDesc3';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionProductDesc1 />
      <SectionProductDesc2 />
      <SectionProductDesc3 />
    </div>
  );
}

export default HomePage;
