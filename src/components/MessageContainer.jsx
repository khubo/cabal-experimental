import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'react-chat-elements';

const WrapperContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const MessageBox = styled(Input)`
  height: 50px;
  textArea {
    width: 90%;
    height: 100%;
    float: left;
  }
`;

const SendButton = styled(Button)`
  padding: 10px;
  margin: 0 5px;
  height: 50px;
`;

const MessageList = styled.div`
  height: 100%;
`;
export default function MessageContainer() {
  return (
    <WrapperContainer>
      <h1> Messages</h1>
      <MessageList />
      <MessageBox
        multiline
        rightButtons={<SendButton text="Send" onClick={() => {}} />}
      />
    </WrapperContainer>
  );
}
