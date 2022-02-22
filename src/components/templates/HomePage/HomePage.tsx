import React, { useContext, useEffect } from 'react';
import HeroSection from '../../organisms/HeroSection/HeroSection';
import SectionProductDesc1 from '../../organisms/SectionProductDesc1/SectionProductDesc1';
import SectionProductDesc2 from '../../organisms/SectionProductDesc2/SectionProductDesc2';
import SectionProductDesc3 from '../../organisms/SectionProductDesc3/SectionProductDesc3';
import { Context } from '../../../providers/GeneralProvider';

function HomePage(): JSX.Element {
  const context = useContext(Context);
  const { example, setExample, example2, setExample2 } = context;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ example, setExample, example2, setExample2 });
  }, [example, example2, setExample, setExample2]);
  return (
    <div>
      <HeroSection />
      {/* Example to present React Context */}
      <button type="button" onClick={() => setExample((prev: boolean) => !prev)}>
        Button
      </button>
      <button type="button" onClick={() => setExample2((prev: boolean) => !prev)}>
        Button2
      </button>
      <SectionProductDesc1 />
      <SectionProductDesc2 />
      <SectionProductDesc3 />
    </div>
  );
}

export default HomePage;
