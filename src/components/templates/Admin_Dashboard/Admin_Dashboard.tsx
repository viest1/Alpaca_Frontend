import React from 'react';
import styled from 'styled-components';
import TitleWithLines from '../../atoms/TitleWithLines/TitleWithLines';
import CardClient from '../../molecules/CardClient/CardClient';
import CardProject from '../../molecules/CardProject/CardProject';
import { dataStats, optionsDoughnut } from './chartSettings';
import Chart from '../../molecules/Chart/Chart';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  h3 {
    padding: 1rem 0;
    margin: 0;
  }
  h3:first-child {
    text-transform: uppercase;
  }
  h3,
  h4 {
    text-align: center;
  }
`;

const ContainerClients = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContainerProjects = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Data = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    width: 66%;
  }
`;
const Stats = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    width: 30%;
  }
`;
const ContainerDataAndStats = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: flex;
    width: 100%;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const dummyClientData = [
  {
    name: 'David Rabinovich',
    email: 'David@Rabinovichasdasdasdasd.com',
    phone: '+49 112 1231 032',
    projects: '2',
    finished: 'Yes'
  },
  {
    name: 'Gabo Fernandez',
    email: 'Gabo@Fernandez.com',
    phone: '+49 112 1231 032',
    projects: '7',
    finished: 'No'
  },
  {
    name: 'Marlen Wied.....? xD',
    email: 'Marlen@Marlen.com',
    phone: '+49 112 1231 032',
    projects: '1',
    finished: '90%'
  }
];

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

function AdminDashboard() {
  return (
    <Container>
      <h3>Dashboard</h3>
      <ContainerDataAndStats>
        <Data>
          <div>
            <TitleWithLines text="Recent Clients" />
            <ContainerClients>
              {dummyClientData.map((item, i) => (
                <div>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <CardClient key={i} clientData={item} />
                </div>
              ))}
            </ContainerClients>
          </div>
          <div>
            <TitleWithLines text="Recent Projects" />
            <ContainerProjects>
              {dummyProjectData.map((item, i) => (
                <div>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <CardProject key={i} projectData={item} />
                </div>
              ))}
            </ContainerProjects>
          </div>
        </Data>
        <Stats>
          <TitleWithLines text="Statistics" />
          <Chart data={dataStats} options={optionsDoughnut} />
        </Stats>
      </ContainerDataAndStats>
    </Container>
  );
}

export default AdminDashboard;
