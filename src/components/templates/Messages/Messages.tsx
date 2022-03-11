import React, { SyntheticEvent, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';
import Button from '../../atoms/Button/Button';
import CardMessage from '../../molecules/CardMessage/CardMessage';
import { Context } from '../../../providers/GeneralProvider';
import useForm from '../../../hooks/useForm';
import useError from '../../../hooks/useError';
import RoundedPhoto from '../../atoms/RoundedPhoto/RoundedPhoto';
import NoItemsFound from '../../atoms/NoItemsFound/NoItemsFound';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  //gap: 3rem;
`;

const Form = styled.form`
  padding: 1rem;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  * {
    width: 100%;
  }
  //border: 1px solid grey;
`;

const WrapperMessages = styled.div`
  //padding: 1rem;
  //border: 2px solid black;
  max-height: 100%;
  height: 400px;
  width: 95vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  //gap: 0.4rem;
  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    overflow-y: scroll;
    overscroll-behavior: contain;
    height: 100%;
    padding-top: 0.4rem;
  }
`;

const PContainer = styled.div`
  background: ${({ theme }) => theme.color.main3};
  color: white;
  padding: 1rem;
`;

const ContactList = styled.div`
  padding: 0 1rem;
  border-right: 1px solid grey;
  overflow: hidden;
  overflow-y: scroll;
  min-width: 200px;
  overscroll-behavior: contain;
  // TODO Not good - to FIX
  max-height: 566px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding: 0.5rem 0 0.5rem 0;
  gap: 1rem;
  h5 {
    padding: 0;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizeOpenSans.m};
  }
`;

const ContainerContactListAndMessages = styled.div`
  display: flex;
  border: 1px solid grey;
  justify-content: center;
  margin: 0 auto;
  //gap: 3rem;
`;

const H3Styled = styled.h3`
  display: none;
  // ${({ theme }) => theme.up(theme.breakpoint.m)} {
  //   display: block;
  // }
`;

interface Message {
  message: string;
  receiverId: string;
}

const initialValue: Message = {
  message: '',
  receiverId: ''
};

function Messages() {
  const { messages, userData } = useContext(Context);
  const [clientMessages, setClientMessages] = useState([]);
  const { inputs, handleChange, resetForm } = useForm(initialValue);
  const { handleError } = useError();
  const [clients, setClients] = useState<any[]>([]);
  const [actuallyClient, setActuallyClient] = useState<any[]>([]);

  // Fetching Clients from Freelancer
  const fetchClients = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/user/freelancer`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData?.token}`
        }
      });
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

  // Fetching Freelancers from Client
  const fetchClientsForClient = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/user/freelancers`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData?.token}`
        }
      });
      const resJSON = await res.json();
      // console.log(resJSON);
      if (res.status === 200) {
        console.log(resJSON);
        setClients(resJSON);
      } else {
        handleError(resJSON.message);
      }
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
      handleError();
    }
  };

  // onSubmit Form - Send a Message
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
        console.log({ resJSON });
        if (res.status === 201) {
          resetForm();
          handleError(resJSON.message, true);
        } else {
          handleError(resJSON.message);
        }
      } catch (error: any) {
        console.log('Something wrong with sending message', error);
        handleError();
      }
    };
    sendMessage();
  };

  // Set actually client and his messages after click on his Avatar
  const handleDisplayMessages = (id: string) => {
    console.log(id);
    setClientMessages(messages.filter((item: any) => item.creator === id || item.receiver === id));
    setActuallyClient(clients.filter((item: any) => item._id === id));
  };

  // Fetching Clients
  useEffect(() => {
    if (userData.token && userData.role === 'Freelancer') {
      fetchClients();
    }
    if (userData.token && userData.role === 'Client') {
      fetchClientsForClient();
    }
  }, []);

  // Assign actually client on begin and set client messages
  useEffect(() => {
    if (actuallyClient.length < 1 && clients.length > 0 && messages.length > 0) {
      setActuallyClient([clients[0]]);
      setClientMessages(() =>
        messages.filter(
          (item: any) => item.creator === clients[0]._id || item.receiver === clients[0]._id
        )
      );
    }
    if (actuallyClient.length > 0) {
      inputs.receiverId = actuallyClient[0]._id;
    }
  }, [actuallyClient, clients, messages]);

  // If messages changes thanks to SSE(Server Sent Events) then we display new message
  useEffect(() => {
    if (actuallyClient.length > 0) {
      setClientMessages(
        messages.filter(
          (item: any) =>
            item.creator === actuallyClient[0]._id || item.receiver === actuallyClient[0]._id
        )
      );
    }
  }, [messages]);

  return (
    <Container>
      <H3Styled>Messages</H3Styled>
      <ContainerContactListAndMessages>
        <ContactList>
          {!clients.length && <NoItemsFound text="Clients" />}
          {clients.map((clientData: any) => (
            <Contact key={clientData._id} onClick={() => handleDisplayMessages(clientData._id)}>
              <RoundedPhoto
                img={clientData.avatar}
                alt="face"
                width="60px"
                height="60px"
                outline="3px solid black"
              />
              <div>
                <h5>{clientData.name}</h5>
              </div>
            </Contact>
          ))}
        </ContactList>
        <div>
          <WrapperMessages>
            {actuallyClient.length > 0 && (
              <PContainer>
                {' '}
                <p>{actuallyClient[0].name}</p>
              </PContainer>
            )}
            <div>
              {clientMessages.map((item: any, i) => (
                <CardMessage
                  // style={{ marginLeft: item.creator === userData.userId ? 'auto' : null }}
                  marginLeft={item.creator === userData.userId}
                  key={item._id}
                  message={item}
                  idName={i === clientMessages.length - 1 ? 'lastMessage' : undefined}
                  // ref={i === clientMessages.length - 1 ? ref : null}
                />
              ))}
              {/* <div ref={lastRef} /> */}
              <AlwaysScrollToBottom />
            </div>
          </WrapperMessages>
          <Form onSubmit={handleSubmitMessage}>
            <InputWithLabel
              placeholder="Write a Message..."
              name="message"
              onChange={handleChange}
              value={inputs.message}
            />
            <Button text="Send a Message" type="submit" />
          </Form>
        </div>
      </ContainerContactListAndMessages>
    </Container>
  );
}

export default Messages;

// Component which is created after last element to scroll
export function AlwaysScrollToBottom() {
  const elementRef: any = useRef();
  useEffect(() => elementRef.current.scrollIntoView(false));
  return <div ref={elementRef} />;
}
