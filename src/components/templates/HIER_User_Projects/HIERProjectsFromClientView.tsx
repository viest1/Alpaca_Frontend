import React, { useContext, useEffect, useState } from 'react';
// import { BsThreeDots } from 'react-icons/bs';
// import styled from 'styled-components';
// import IconClickable from '../../atoms/IconClickable/IconClickable';
// import Button from '../../atoms/Button/Button';
// import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import { Context } from '../../../providers/GeneralProvider';
// import CardClient from '../../molecules/CardClient/CardClient';
// import CardProject from '../../molecules/CardProject/CardProject';
import useError from '../../../hooks/useError';

/* const ContainerProjects = styled.div`
  padding: 0.3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 95%;
  margin: 1.2rem auto 0 auto;
  border-radius: 1rem;
  ${({ theme }) => theme.down('700px')} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    justify-content: center;
  }
`;
 */
function Projects() {
  const [projects, setProjects] = useState([]);
  const { userData } = useContext(Context);
  const { handleError } = useError();

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/project`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`
        }
      });
      const resJSON = await res.json();
      console.log(resJSON);
      if (res.status === 200) {
        setProjects(resJSON);
      } else {
        handleError(resJSON.message);
      }
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
      handleError();
    }
  };

  // useEffect ist für
  useEffect(() => {
    fetchProjects();
  }, []);

  console.log({ projects });

  return (
    <div>
      {' '}
      <h2>Projects</h2>
      {/* <ContainerFilterBy /> */}
    </div>
  );
}

export default Projects;
