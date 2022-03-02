import React from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
/* import useForm from '../../../hooks/useForm'; */
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import COMPANYLOGO from '../../../assets/illustrations/COMPANYLOGO.png';
import IconClickable from '../../atoms/IconClickable/IconClickable';
import Button from '../../atoms/Button/Button';
import ServiceListItem from '../../molecules/ServiceListItem/ServiceListItem';

const PageContainer = styled.div`
  border: 2px solid red;
  padding: 2rem;
  display: flex;
`;

const BasicInfoContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  .left {
    border: 5px solid yellow;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right {
    border: 5px solid purple;
    width: 100%;
    padding: 1.5rem;
  }
`;

const AddNewServiceContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 4;
`;

const ThreeDotsMenuWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ListOfServices = styled.div`
  border: 2px solid purple;
  display: flex;
  align-items: center;
  justify-content: baseline;

  .wrapper {
    border: 2px solid black;
    width: 500px;
    display: flex;
    jus
  }

  .iconWrapper {
    border: 2px solid black;
    height: 60px;
  }
`;

/* const initialValue = {
  serviceId: '0',
  serviceName: '',
  price: '',
  description: ''
};
 */
function NewProject(): JSX.Element {
  return (
    <PageContainer>
      <BasicInfoContainer>
        <div className="left">
          <RoundedPhoto
            img={COMPANYLOGO}
            alt="blablabla"
            width="150px"
            height="150px"
            border="2px"
          />
          <InputWithLabel label="Star Date*" type="date" name="startDate" required />
          <InputWithLabel label="End Date*" type="date" name="endDate" required />
        </div>
        <div className="right">
          <InputWithLabel
            label="Project Title*"
            type="input"
            name="projectTitle"
            placeholder="enter a name for the project"
            required
          />
          <InputWithLabel
            label="Company Name"
            type="input"
            name="companyName"
            placeholder="enter the name of the company"
          />
          <InputWithLabel
            label="Customer Name*"
            type="input"
            name="customerName"
            placeholder="enter a customer name"
            required
          />
          <InputWithLabel
            label="Website"
            type="input"
            name="website"
            placeholder="enter a website"
          />
          <InputWithLabel
            label="Tax Number"
            type="input"
            name="taxNumber"
            placeholder="enter a tax ID"
          />
        </div>
      </BasicInfoContainer>
      <AddNewServiceContainer>
        <ThreeDotsMenuWrapper>
          <IconClickable icon={<BsThreeDots fontSize={40} />}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem' }}
            >
              <Button WhiteMenu text="Add New Service" width="200px" fontSize="1rem" />
              <Button WhiteMenu text="Add Text Field" width="200px" fontSize="1rem" />
            </div>
          </IconClickable>
        </ThreeDotsMenuWrapper>
        <h2>List Of Services</h2>
        <ServiceListItem />
        <ListOfServices />
      </AddNewServiceContainer>
    </PageContainer>
  );
}
export default NewProject;
