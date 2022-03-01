import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar4Week } from 'react-icons/bs';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import COMPANYLOGO from '../../../assets/illustrations/COMPANYLOGO.png';

const PageContainer = styled.div`
  border: 2px solid red;
`;

const BasicInfoContainer = styled.div`
  border: 2px solid green;
  width: 700px;
  display: flex;
  flex-direction: row;

  .left {
    border: 5px solid yellow;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .calendarWrapper {
      background: #ff0054;
      width: 120px;
    }

    .calendar {
      border: 2px solid black;
      border-radius: 10px;
      font-size: ${({ theme }) => theme.fontSizeOpenSans.ms};
      font-weight: bold;
      text-align: center;
      padding: 0.5rem;
      align-self: center;
    }

    .datePickerWrapper {
      border: 3px solid blue;
      width: 170px;
      display: flex;
      padding: 0.3rem;
    }

    .calendarIconWrapper {
      padding: 0.3rem;
    }
  }

  .right {
    border: 5px solid purple;
    width: 100%;
    padding: 1.5rem;
  }
`;

const AddNewServiceContainer = styled.div`
  border: 2px solid black;
`;

function NewProject(): JSX.Element {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <PageContainer>
      <BasicInfoContainer>
        <div className="left">
          <RoundedPhoto
            img={COMPANYLOGO}
            alt="blablabla"
            width="200px"
            height="200px"
            border="2px"
          />
          <h4 style={{ lineHeight: '0.5rem' }}>Pick a Date</h4>
          <div className="datePickerWrapper">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              wrapperClassName="calendarWrapper"
              className="calendar"
            />
            <div className="calendarIconWrapper">
              <BsCalendar4Week fontSize={30} />
            </div>
          </div>
          <div className="datePickerWrapper">
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              wrapperClassName="calendarWrapper"
              className="calendar"
            />
            <div className="calendarIconWrapper">
              <BsCalendar4Week fontSize={30} />
            </div>
          </div>
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
      <AddNewServiceContainer>ADD NEW SERVICE</AddNewServiceContainer>
    </PageContainer>
  );
}
export default NewProject;
