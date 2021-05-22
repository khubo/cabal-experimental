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
  const { cabals, focusCabal } = useCabal();

  console.log('currentchannel!@#', currentChannel);
  return (
    <Container>
      {joinedChannels.map((channel) => (
        <Channel
          key={channel}
          current={currentChannel === channel}
          onClick={() => {
            console.log('this is clicked', channel);
            focusChannel(channel);
          }}
        >
          # {channel}
        </Channel>
      ))}
      <div>
        {cabals.map((item) => (
          <div key={item} onClick={() => focusCabal(item)}>
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
}
