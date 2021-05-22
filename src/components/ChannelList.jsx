import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const Channel = styled.div`
  padding: 5px;
`;
export default function ChannelList() {
  return (
    <Container>
      <Channel># channel 1</Channel>
      <Channel> # channel 2</Channel>
    </Container>
  );
}
