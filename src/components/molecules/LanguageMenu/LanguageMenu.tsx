import React, { useState } from 'react';
import styled from 'styled-components';
import i18next from 'i18next';

const Container = styled.div`
  position: relative;
  z-index: 9999;
  > div:first-child {
    display: flex;
    gap: 0.2rem;
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    &:hover {
      cursor: pointer;
      background: white;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2rem;
    left: 0;
  }
  > div:nth-child(2) > div {
    display: flex;
    gap: 0.2rem;
    transition: 0.3s;
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    &:hover {
      cursor: pointer;
      background: white;
    }
  }
`;

const languages = [
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }
];

function LanguageMenu() {
  const [actuallyLng, setActuallyLng] = useState(i18next.resolvedLanguage);
  const [isOpenMenuLanguage, setIsOpenMenuLanguage] = useState(false);
  return (
    <Container>
      <div onClick={() => setIsOpenMenuLanguage((prev) => !prev)}>
        <span className={`fi fi-${actuallyLng === 'en' ? 'gb' : 'de'}`} />
        <p>{actuallyLng.toUpperCase()}</p>
      </div>
      {isOpenMenuLanguage && (
        <div>
          {languages.map((item) => (
            <div
              onClick={() => {
                i18next.changeLanguage(item.code);
                setIsOpenMenuLanguage(false);
                setActuallyLng(item.code);
              }}
            >
              <span className={`fi fi-${item.country_code}`} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default LanguageMenu;
