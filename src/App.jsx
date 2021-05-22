import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useChannel, useMessage } from './lib';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MessageContainer from './components/MessageContainer';

import 'react-chat-elements/dist/main.css';

const MainContainer = styled.div`
  display: flex;
  min-height: 100%;
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function App() {
  return (
    <MainContainer>
      <Sidebar />
      <MessageContainer />
    </MainContainer>
  );
}
