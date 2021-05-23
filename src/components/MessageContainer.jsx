import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'react-chat-elements';
import { useChannel, useMessage } from '../lib';
import Message from './Message';

const WrapperContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
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
  padding: 20px;
  height: 100%;
  color: black;
  overflow: scroll;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  padding: 15px;
  border: 1px solid grey;
`;
export default function MessageContainer() {
  const { currentChannel, focusChannel } = useChannel();
  const { messages } = useMessage(currentChannel);

  return (
    <WrapperContainer>
      <Header> # {currentChannel}</Header>
      <MessageList>
        {messages
          .filter((i) => i?.value?.type === 'chat/text')
          .map((item) => {
            return (
              <Message item={item} key={item.key + item?.value?.timestamp} />
            );
          })}
      </MessageList>
      <MessageBox
        multiline
        rightButtons={<SendButton text="Send" onClick={() => {}} />}
      />
    </WrapperContainer>
  );
}
