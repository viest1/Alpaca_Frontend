import React from 'react';
import styled from 'styled-components';

interface MessageStyled {
  marginLeft: boolean;
  position: string | undefined;
}

const Container = styled.div<MessageStyled>`
  width: max-content;
  max-width: 80%;
  margin: ${({ marginLeft: m }) => (m ? '0 0.4rem 0 auto' : '0 0.4rem')};
  position: ${({ position }) => position && position};
  p:last-child {
    background: #5757f3;
    border-radius: 1.4rem;
    padding: 0.2rem 0.9rem;
    color: white;
  }
`;

// const NameAndDate = styled.div`
//   display: flex;
// `;

interface Message {
  message: {
    text: string;
    creator: string;
    receiver: string;
    nameCreator: string;
    nameReceiver: string;
    createdAt: string;
  };
  marginLeft: boolean;
  idName?: string;
  position?: string | undefined;
}

const CardMessage = React.forwardRef(
  ({ message, marginLeft, idName, position }: Message, ref: any) => {
    // const { userData } = useContext(Context);
    // // const marginLeft = message.nameCreator === userData.userId;
    // const [marginLeft, setMarginLeft] = useState(false);
    // useEffect(() => {
    //   setMarginLeft(message.creator === userData.userId);
    // }, []);
    return (
      <Container marginLeft={marginLeft} id={idName} position={position} ref={ref}>
        {/* <NameAndDate> */}
        {/*   {message.nameCreator && <p>{message.nameCreator} - </p>} */}
        {/*   <p>{message.createdAt}</p> */}
        {/* </NameAndDate> */}
        <p>{message.text}</p>
      </Container>
    );
  }
);

CardMessage.defaultProps = {
  idName: undefined,
  position: undefined
};

export default CardMessage;
