import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin: 20px;
  font-weight: bold;
`;

const Description = styled.div``;

const Headline = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 40px;
`;

const Info = styled.p`
  color: orange;
`;

export function Faq() {
  const { t } = useTranslation();

  const data = [
    { title: t('faqQuestion1'), description: t('faqAnswer1'), id: 1 },
    {
      title: t('faqQuestion2'),
      description: t('faqAnswer2'),
      id: 2
    },
    {
      title: t('faqQuestion3'),
      description: t('faqAnswer3'),
      id: 3
    }
  ];

  return (
    <Container>
      <div>
        <Headline> {t('faqHeadline')} </Headline>
        <Info> {t('faqQuestion')}</Info>
        {data.map((item) => (
          <AccordionItem key={item.id} itemToDisplay={item} />
        ))}
      </div>
    </Container>
  );
}

function AccordionItem({ itemToDisplay }: any) {
  const [showDescription, setShowDescription1] = useState(false);

  const handleOpenDescription = () => {
    setShowDescription1((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <Title onClick={handleOpenDescription}>{itemToDisplay.title}</Title>
        {showDescription && <Description>{itemToDisplay.description}</Description>}
      </div>
    </Container>
  );
}
