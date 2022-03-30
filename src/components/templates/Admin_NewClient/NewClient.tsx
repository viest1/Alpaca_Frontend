import React, { SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button/Button';
import { Context } from '../../../providers/GeneralProvider';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import { InputFileStyle } from '../SignUp/SignUp';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import PageHead from '../../molecules/PageHead/PageHead';
import Input from '../../atoms/Input/Input';
// import useError from '../../../hooks/useError';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
const ContainerDiv = styled.div`
  h4 {
    text-align: left;
    margin: 1rem 0;
  }
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    background: ${({ theme }) => theme.color.main1};
    display: flex;
    gap: 3rem;
    padding: 2rem 3rem;
    min-height: 500px;
    border: 2px solid black;
    box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
    border-radius: 0.6rem;
    > div {
      flex-basis: 100%;
    }
  }
`;

// const ParagraphAdd = styled.div`
//   display: none;
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     display: block;
//   }
// `;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeadingAdd = styled.div`
  display: none;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: flex;
    justify-content: flex-start;
  }
`;
const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  min-width: 300px;
`;
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
`;

function NewClient() {
  const { t } = useTranslation();
  const { userData } = useContext(Context);
  interface initial {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    identityCardNumber: string;
    taxNumber: string;
    image: any;
  }
  // updating both objects
  const initialValue: initial = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    identityCardNumber: '',
    taxNumber: '',
    image: ''
  };
  const { inputs, handleChange, clearForm } = useForm(initialValue);
  const { handleError } = useError();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData?.token}`
        },
        body: JSON.stringify(inputs)
      });
      const resJSON = await res.json();
      if (res.status === 201) {
        clearForm();
        handleError('You created user', true);
      } else {
        handleError(resJSON.message);
      }
    } catch (error: any) {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  const pageHeadInfo = [
    {
      id: 1,
      titleOfPage: t('adminCreateNewClient')
    }
  ];

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <PageHead pageHeadInfo={pageHeadInfo} />
          <ContainerDiv>
            <DivOne>
              <div>
                <HeadingAdd>
                  <h4>User Customer</h4>
                </HeadingAdd>
                <RoundedPhoto img={inputs.image || ''} alt="face" width="250px" height="250px" />
              </div>
              <ContainerButton>
                <Button background="#1F313E" text={t('adminCreateNewClientUploadPhoto')} />
                <InputFileStyle name="image" type="file" onChange={handleChange} />
              </ContainerButton>
            </DivOne>
            <DivTwo>
              <h4>{t('adminCreateNewClientContact')}</h4>
              <Input
                label="Name*"
                name="name"
                placeholder={t('contactChatName')}
                onChange={handleChange}
                value={inputs.name}
                required
              />
              <Input
                label="Email*"
                name="email"
                type="email"
                onChange={handleChange}
                value={inputs.email}
                required
              />
              <Input
                label={t('signUpBoxContactInformationPassword')}
                name="password"
                type="password"
                onChange={handleChange}
                value={inputs.password}
                required
              />
              <Input
                label={t('adminCreateNewClientPhoneNumber')}
                name="phoneNumber"
                type="tel"
                onChange={handleChange}
                value={inputs.phoneNumber}
              />
            </DivTwo>
            <DivThree>
              <div>
                <h4>{t('adminCreateNewClientBilling')}</h4>
                <Input
                  label={t('signUpBoxBillingInformationPassport')}
                  name="identityCardNumber"
                  onChange={handleChange}
                  value={inputs.identityCardNumber}
                />
                <Input
                  label={t('signUpBoxBillingInformationTaxNumber')}
                  name="taxNumber"
                  onChange={handleChange}
                  value={inputs.taxNumber}
                />
                {/* <ParagraphAdd> */}
                {/*   <p>Lquia nisi corrupti voluptatibus?</p> */}
                {/* </ParagraphAdd> */}
              </div>
              <ContainerButton>
                <Button
                  type="submit"
                  background="#9e0059"
                  text={isLoading ? 'Loading...' : 'Create New Client'}
                />
              </ContainerButton>
            </DivThree>
          </ContainerDiv>
        </div>
      </FormContainer>
    </div>
  );
}

export default NewClient;
