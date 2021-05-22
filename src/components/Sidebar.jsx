import React from 'react';
import styled from 'styled-components';
import { SideBar } from 'react-chat-elements';
import ChannelList from './ChannelList';
import CabalList from './CabalList';

const WrapperContainer = styled.div`
  min-width: 220px;
  max-width: 320px;
  overflow: auto;
  background-color: black;
  color: white;
  display: flex;
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
      <CabalList />
      <SideBar top={<Header> Channels </Header>} center={<ChannelList />} />
    </WrapperContainer>
  );
}
