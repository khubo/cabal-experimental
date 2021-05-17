import { useContext, useState, useEffect } from 'react';
import { useCabal } from './useCabal';
import { CabalContext } from '../index';

export function useChannel() {
  const client = useContext(CabalContext);

  const [channels, setChannels] = useState([]); // all channels
  const [joinedChannels, setJoinedChannels] = useState([]); // all channels joined by the user
  const [currentChannel, setCurrentChannel] = useState('default'); // current selected channel
  const [members, setMembers] = useState([]); // members of channel

  const { currentCabal } = useCabal();

  useEffect(() => {
    if (!client) return;
    const channels = client.getChannels();
    const joinedChannels = client.getJoinedChannels();
    const channel = client.getCurrentChannel();
    const channelMembers = client.getChannelMembers(channel);

    // TODO: any way to batch irrespective of the renderer?
    setChannels(channels);
    setCurrentChannel(channel);
    setJoinedChannels(joinedChannels);
    setMembers(channelMembers);
  }, [currentCabal]);

  /**
   * change the current channel
   * @param channel
   * @returns
   */
  function focusChannel(channel: string) {
    if (!(channel in joinedChannels)) return;
    client.focusChannel(channel);
    setCurrentChannel(channel);
  }

  return {
    channels,
    joinedChannels,
    currentChannel,
    focusChannel, // change the current channel
    members,
  };
}
