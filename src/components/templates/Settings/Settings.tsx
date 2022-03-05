import React, { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import Button from '../../atoms/Button/Button';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import face from '../../../assets/images/face2small.jpg';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import { Context } from '../../../providers/GeneralProvider';

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

function Settings() {
  const { handleError } = useError();

  interface FormSignUp {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    newPasswordRepeated: string;
    taxNumber: string;
    identityCardNumber: string | undefined;
  }

  const { userData, setUserData } = useContext(Context);

  const initialValue: FormSignUp = {
    name: userData.name,
    email: userData.email,
    password: '',
    newPassword: '',
    newPasswordRepeated: '',
    taxNumber: userData.taxNumber,
    identityCardNumber: userData.identityCardNumber
  };

  const { handleChange, inputs } = useForm(initialValue);

  const handleSubmitUserDataChange = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('You try change your data with these inputs', inputs);
    const updateUserData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData.token}`
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        if (res.status === 200) {
          handleError(resJSON.message || 'You changed data correctly', true);
          const { identityCardNumber, email, name, taxNumber } = resJSON;
          setUserData({ ...userData, identityCardNumber, email, name, taxNumber });
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    updateUserData();
  };

  const htmlToDisplay = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>A simple, clean, and responsive HTML invoice template</title>

		<style>
			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 30px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: left;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 45px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}

			/** RTL **/
			.invoice-box.rtl {
				direction: rtl;
				font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
			}

			.invoice-box.rtl table {
				text-align: right;
			}

			.invoice-box.rtl table tr td:nth-child(2) {
				text-align: left;
			}
		</style>
	</head>

	<body>
		<div class="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td class="title">
									<img src="https://www.sparksuite.com/images/logo.png" style="width: 100%; max-width: 300px" />
								</td>

								<td>
									Invoice #: 123<br />
									Created: January 1, 2015<br />
									Due: February 1, 2015
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									Sparksuite, Inc.<br />
									12345 Sunny Road<br />
									Sunnyville, CA 12345
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="heading">
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr class="details">
					<td>Check</td>

					<td>1000</td>
				</tr>

				<tr class="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>

				<tr class="item">
					<td>Website design</td>

					<td>$300.00</td>
				</tr>

				<tr class="item">
					<td>Hosting (3 months)</td>

					<td>$75.00</td>
				</tr>

				<tr class="item last">
					<td>Domain name (1 year)</td>

					<td>$10.00</td>
				</tr>

				<tr class="total">
					<td></td>

					<td>Total: $385.00</td>
				</tr>
			</table>
		</div>
	</body>
</html>`;

  const handleGeneratePdf = (e: any) => {
    e.preventDefault();
    console.log('You send this html', htmlToDisplay);
    const generatePdf = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/pdf`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData.token}`
          },
          body: JSON.stringify({ htmlToDisplay })
        });
        const resJSON = await res.json();
        if (res.status === 200) {
          handleError(resJSON.message || 'You generated correctly', true);
          console.log(resJSON);
          saveAs(`http://localhost:5000/${resJSON.path}`, resJSON.fileName);
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('FETCHING ERROR', error);
        handleError();
      }
    };
    generatePdf();
  };

  return (
    <FormContainer onSubmit={handleSubmitUserDataChange}>
      <div>
        <Button type="button" text="Generate Pdf" onClick={handleGeneratePdf} />
        <h3>Settings</h3>
        <ContainerDiv>
          <DivOne>
            <div>
              <HeadingAdd>
                <h4>User Details</h4>
              </HeadingAdd>
              <RoundedPhoto img={face} alt="face" width="250px" height="250px" />
            </div>
            <ContainerButton>
              <Button background="#1F313E" text="Upload Photo" />
            </ContainerButton>
          </DivOne>
          <DivTwo>
            <h4>Contact Information</h4>
            <InputWithLabel
              label="Name*"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
            />
            <InputWithLabel
              label="Email*"
              name="email"
              type="email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
            <InputWithLabel
              label="New Password"
              name="newPassword"
              type="password"
              value={inputs.newPassword}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Repeat New Password"
              name="newPasswordRepeated"
              type="password"
              value={inputs.newPasswordRepeated}
              onChange={handleChange}
            />
          </DivTwo>
          <DivThree>
            <div>
              <h4>Billing Information</h4>
              <InputWithLabel
                label="Identity Card Number"
                name="identityCardNumber"
                onChange={handleChange}
                value={inputs.identityCardNumber}
              />
              <InputWithLabel
                label="Tax Number"
                name="taxNumber"
                onChange={handleChange}
                value={inputs.taxNumber}
              />
              <InputWithLabel
                label="Password To Confirm Changes*"
                name="password"
                type="password"
                onChange={handleChange}
                value={inputs.password}
                required
              />
              <ParagraphAdd>
                <p />
              </ParagraphAdd>
            </div>
            <ContainerButton>
              <Button type="submit" background="#9e0059" text="Save Changes" />
            </ContainerButton>
          </DivThree>
        </ContainerDiv>
      </div>
    </FormContainer>
  );
}

export default Settings;
