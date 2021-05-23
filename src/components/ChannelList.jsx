import React from 'react';
import styled from 'styled-components';
import { useCabal, useChannel } from '../lib';

const Container = styled.div`
  padding: 10px;
`;

const Channel = styled.div`
  padding: 5px;
  color: ${(props) => (props.current ? 'white' : 'grey')};
`;
export default function ChannelList() {
  const {
    channels,
    currentChannel,
    joinedChannels,
    focusChannel,
  } = useChannel();

  return (
    <Container>
      {joinedChannels.map((channel) => (
        <Channel
          key={channel}
          current={currentChannel === channel}
          onClick={() => {
            focusChannel(channel);
          }}
        >
          # {channel}
        </Channel>
      ))}
    </Container>
  );
}
