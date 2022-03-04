import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../../providers/GeneralProvider';
import CardDetails from '../../molecules/CardDetails/CardDetails';
import useError from '../../../hooks/useError';
import useMediaQuery from '../../../hooks/useMediaQuery';

// /project/:projectId
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
`;
const Title = styled.h3`
  margin: auto;
  text-align: center;
`;
const ContainerDetails = styled.div`
  margin: auto;
`;
const ProjectInvoicesFiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: 1px solid red;
  padding: 1rem;
`;
const ServicesInvoice = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  }
h4 {
  text-decoration: underline;
}
`;
const PricesInvoice = styled.div`
  display: flex;
  flex-direction: column;
`;
// Desktop Version
const Invoice = styled.div`
  //by the moment is a flex div
  display: flex;
  border: 1px solid black;
  padding: 1rem;
`;
const Total = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 1rem;
`;
const Files = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 1rem;
`;
const nameOfServicesData = [
  {
    path: '/',
    text: 'Low Res. Mockup',
    id: 1
  },
  {
    path: '/',
    text: 'Back End Architecture',
    id: 2
  },
  {
    path: '/',
    text: 'UX & UI Design',
    id: 3
  },
  {
    path: '/',
    text: 'Front End Development',
    id: 4
  },
  {
    path: '/',
    text: 'Low Res. Mockup',
    id: 5
  },
  {
    path: '/',
    text: 'Back End Architecture',
    id: 6
  },
  {
    path: '/',
    text: 'UX & UI Design',
    id: 7
  },
  {
    path: '/',
    text: 'Front End Development',
    id: 8
  }
];
const pricesData = [
  {
    path: '/',
    text: '250€',
    id: 1
  },
  {
    path: '/',
    text: '45€',
    id: 2
  },
  {
    path: '/',
    text: '200€',
    id: 3
  },
  {
    path: '/',
    text: '45€',
    id: 4
  },
  {
    path: '/',
    text: '250€',
    id: 5
  },
  {
    path: '/',
    text: '45€',
    id: 6
  },
  {
    path: '/',
    text: '200€',
    id: 7
  },
  {
    path: '/',
    text: '45€',
    id: 8
  }
];

function ProjectDetail() {
  const [project, setProject] = useState({});

  const { userData } = useContext(Context);
  const { handleError } = useError();
  const projectId = '620f606f16b8070a5564db1d';
  // const projectId = useParams();
  console.log(projectId);

  const fetchProject = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/project/${projectId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`
        }
      });
      const resJSON = await res.json();
      console.log('This is Fetch', res);
      console.log(resJSON);
      if (res.status === 200) {
        setProject(resJSON);
      } else {
        handleError(resJSON.message);
      }
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
      handleError();
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  // useMediaQuery
  const desktopVersion = useMediaQuery('(min-width: 1060px)');
  return (
    <div>
      <Title>Project Details</Title>
      {!desktopVersion ? (
        <Container>
          <ContainerDetails>{project && <CardDetails projectData={project} />}</ContainerDetails>
          <ProjectInvoicesFiles>
            {/* AQUÍ ME QUEDÉ -------------------------------------------------------------*/}
            <ServicesInvoice>
              <h4>
                <span>Name</span>
                <span>of</span>
                <span>Service</span>
              </h4>
              {nameOfServicesData.map((item) => (
                <div key={item.id}>
                  <p>{item.text}</p>
                </div>
              ))}
            </ServicesInvoice>
            <PricesInvoice>
              <h4>Price</h4>
              {pricesData.map((item) => (
                <div key={item.id}>
                  <p>{item.text}</p>
                </div>
              ))}
            </PricesInvoice>
          </ProjectInvoicesFiles>
        </Container>
      ) : (
        <Container>
          <ContainerDetails>{project && <CardDetails projectData={project} />}</ContainerDetails>
          <ProjectInvoicesFiles>
            <Invoice>Invoice</Invoice>
            <Total>Total</Total>
            <Files>Files</Files>
          </ProjectInvoicesFiles>
        </Container>
      )}
    </div>
  );
}

export default ProjectDetail;
