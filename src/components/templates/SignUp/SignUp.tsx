import React, { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 3rem 1rem;
//   h3,
//   h4 {
//     text-align: center;
//     margin: 0;
//     margin-top: 1rem;
//   }
//   > div:first-child {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 1.5rem;
//     ${({ theme }) => theme.up(theme.breakpoint.m)} {
//       h4 {
//         margin-bottom: 1rem;
//       }
//     }
//   }
// `;
// const ContainerDiv = styled.div`
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     background: ${({ theme }) => theme.color.main1};
//     display: flex;
//     align-items: ;
//     gap: 3rem;
//     padding: 2rem 3rem;
//
//     border: 2px solid black;
//   }
// `;
// //
// // const ContainerPhoto = styled.div`
// //   border-radius: 50%;
// //   width: 120px;
// //   height: 120px;
// //   display: flex;
// //   align-item: center;
// //   justify-content: center;
// //   border: 1px solid black;
// //   margin-bottom: 1rem;
// //   margin-left: auto;
// //   margin-right: auto;
// //   ${({ theme }) => theme.up(theme.breakpoint.m)} {
// //     margin: auto;
// //     margin-bottom: 3rem;
// //     diplay: block;
// //     border-radius: 50%;
// //     width: 220px;
// //     height: 220px;
// //   }
// // `;
// const ParagraphAdd = styled.div`
//   display: none;
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     display: block;
//   }
// `;
//
// const ContainerButton = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
// `;
//
// const InputFileStyle = styled.input`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   &:hover {
//     cursor: pointer;
//     outline: 3px solid black;
//   }
// `;
// const ContainerButton2 = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1.5rem;
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     display: none;
//   }
// `;
// const ContainerButtonSubmit = styled.div`
//   display: none;
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     display: block;
//   }
// `;
// const HeadingAdd = styled.div`
//   display: none;
//   ${({ theme }) => theme.up(theme.breakpoint.m)} {
//     display: flex;
//     //justify-content: flex-start;
//     align-self: flex-start;
//   }
// `;
// const DivOne = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   > div:first-child {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 1rem;
//     margin-bottom: 1rem;
//   }
// `;
// const DivTwo = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 350px;
// `;
// const DivThree = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   max-width: 350px;
// `;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem;
  h3,
  h4 {
    text-align: left;
    margin: 1rem 0 0 0;
  }
  h3:first-child {
    text-align: center;
    max-width: 250px;
    ${({ theme }) => theme.up(theme.breakpoint.m)} {
      max-width: 500px;
    }
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      margin-bottom: 1rem;
    }
  }
`;

const InputFileStyle = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  &:hover {
    cursor: pointer;
    outline: 3px solid black;
  }
`;

const ContainerDiv = styled.div`
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    background: ${({ theme }) => theme.color.main1};
    display: flex;
    gap: 3rem;
    padding: 2rem 3rem;
    min-height: 500px;
    border: 2px solid black;
    border-radius: 0.6rem;
  }
`;

const ParagraphAdd = styled.div`
  display: none;
  ${({ theme }) => theme.up(theme.breakpoint.m)} {
    display: block;
  }
`;

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
`;
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
`;

function SignUp() {
  const { handleError } = useError();

  interface FormSignUp {
    name: string;
    email: string;
    password: string;
    file: File | string;
    taxNumber: string;
    identityCardNumber: string | undefined;
  }

  const initialValue: FormSignUp = {
    name: '',
    email: '',
    password: '',
    file: '',
    taxNumber: '',
    identityCardNumber: undefined
  };

  const { handleChange, inputs } = useForm(initialValue);
  console.log(inputs);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try submit these inputs', inputs);
    const signup = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        console.log(resJSON);
        if (res.status === 201) {
          handleError(
            resJSON.message || 'You created account correctly, now verify your email',
            true
          );
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    signup();
  };

  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    if (inputs.file) {
      setPreviewImage(window.URL.createObjectURL(inputs.file) as any);
    }
  }, [inputs.file]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <h3>CREATE NEW ACCOUNT</h3>
        <ContainerDiv>
          <DivOne>
            <div>
              <HeadingAdd>
                <h4>User Details</h4>
              </HeadingAdd>
              <RoundedPhoto img={previewImage} alt="face" width="250px" height="250px" />
            </div>
            <ContainerButton>
              <Button background="#1F313E" text="Upload Photo" />
              <InputFileStyle name="file" type="file" onChange={handleChange} />
            </ContainerButton>
          </DivOne>
          <DivTwo>
            <h4>Contact Information</h4>
            <InputWithLabel
              label="Name*"
              name="name"
              placeholder="Give your Name"
              onChange={handleChange}
              required
            />

            <InputWithLabel
              label="Email*"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
            <InputWithLabel
              label="Password*"
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </DivTwo>
          <DivThree>
            <div>
              <h4>Billing Information</h4>
              <InputWithLabel
                label="Identity Card Number"
                name="identityCardNumber"
                onChange={handleChange}
              />
              <InputWithLabel label="Tax Number" name="taxNumber" onChange={handleChange} />
              <ParagraphAdd>
                <p>Lorem isi corrupti voluptatibus?</p>
              </ParagraphAdd>
            </div>
            <ContainerButton>
              <Button type="submit" background="#9e0059" text="Create Account" />
            </ContainerButton>
          </DivThree>
        </ContainerDiv>
      </div>
    </FormContainer>
  );
}

export default SignUp;
