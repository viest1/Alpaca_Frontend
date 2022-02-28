import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import CardMessage from '../../molecules/CardMessage/CardMessage';
import { Context } from '../../../providers/GeneralProvider';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import face1 from '../../../assets/images/face1small.jpg';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Form = styled.div`
  padding: 1rem;
`;

const WrapperMessages = styled.div`
  padding: 1rem;
  border: 5px solid black;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
`;

const ContactList = styled.div`
  padding: 1rem;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding: 0.5rem 0 0.5rem 0;
`;

const ContainerContactListAndMessages = styled.div`
  display: flex;
  gap: 3rem;
`;

interface Message {
  message: string;
}

const initialValue: Message = {
  message: ''
};

function Messages() {
  const { messages, userData } = useContext(Context);
  const [clientMessages, setClientMessages] = useState([]);
  const { inputs, handleChange } = useForm(initialValue);
  const { handleError } = useError();
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/freelancer/${userData.token}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userData?.token}`
          }
        }
      );
      const resJSON = await res.json();
      // console.log(resJSON);
      if (res.status === 200) {
        setClients(resJSON);
      } else {
        handleError(resJSON.message);
      }
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
      handleError();
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSubmitMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    const sendMessage = async () => {
      try {
        console.log('This message is sending...', inputs);
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData.token}`
          },
          body: JSON.stringify(inputs)
        });
        const resJSON = await res.json();
        if (res.status === 200) {
          console.log(resJSON);
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('Something wrong with sending message', error);
        handleError();
      }
    };
    await sendMessage();
  };

  const handleDisplayMessages = (id: string) => {
    console.log(id);
    setClientMessages(messages.filter((item: any) => item.creator === id || item.receiver === id));
  };
  return (
    <Container>
      <h3>Messages</h3>
      <ContainerContactListAndMessages>
        <ContactList>
          {clients.map((clientData: any) => (
            <Contact onClick={() => handleDisplayMessages(clientData._id)}>
              <RoundedPhoto
                img={face1}
                alt="face"
                width="60px"
                height="60px"
                outline="3px solid black"
              />
              <div>
                <h4>{clientData.name}</h4>
              </div>
            </Contact>
          ))}
        </ContactList>
        <div>
          <WrapperMessages>
            {clientMessages.map((item: any) => (
              <CardMessage key={item._id} message={item} />
            ))}
          </WrapperMessages>
          <Form onSubmit={handleSubmitMessage}>
            <InputWithLabel label="Write a Message" name="message" onChange={handleChange} />
            <Button text="Send a Message" type="submit" />
          </Form>
        </div>
      </ContainerContactListAndMessages>
    </Container>
  );
}

export default Messages;
