import React from 'react';
import styled from 'styled-components';
import { SideBar } from 'react-chat-elements';
import ChannelList from './ChannelList';

const WrapperContainer = styled.div`
  min-width: 240px;
  max-width: 380px;
  overflow: auto;
  background-color: black;
  color: white;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
  padding: 10px;
  border-bottom: 2px solid grey;
`;

export default function Sidebar() {
  return (
    <WrapperContainer>
      <SideBar top={<Header> Channels </Header>} center={<ChannelList />} />
    </WrapperContainer>
  );
}
