import React from 'react';
import styled from 'styled-components';
import GlobalMessage from '../../organisms/GlobalMessage/GlobalMessage';
import TitleWithLines from '../../atoms/TitleWithLines/TitleWithLines';
import CardProject from '../../molecules/CardProject/CardProject';

const Container = styled.div`
  padding: 1rem;
  > h3 {
    text-align: center;
  }
`;

const ContainerProjects = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1.5rem;
  > div {
    width: 420px;
    max-width: 450px;
    min-width: 330px;
  }
`;
const dummyProjectData = [
  {
    name: 'Super Website',
    website: 'superwebsite.de',
    text: 'Something About',
    dueData: '11-11-2022',
    finished: '32%'
  },
  {
    name: 'Worst Website',
    website: 'worstwebsite.de',
    text: 'Something About',
    dueData: '21-11-2022',
    finished: '66%'
  },
  {
    name: 'Average Website',
    website: 'averagewebsite.de',
    text: 'Something About',
    dueData: '13-11-2024',
    finished: '90%'
  }
];

function UserDashboard() {
  return (
    <Container>
      <h3>User Dashboard</h3>
      <TitleWithLines text="Recent/Actually Projects" />
      <ContainerProjects>
        {dummyProjectData.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardProject key={i} projectData={item} />
        ))}
      </ContainerProjects>
      <GlobalMessage />
    </Container>
  );
}

export default UserDashboard;
