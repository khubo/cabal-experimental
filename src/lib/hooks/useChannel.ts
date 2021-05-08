import { useContext, useState, useEffect } from 'react';
import { useCabal } from './useCabal';
import { CabalContext } from '../index';

export function useChannel() {
  const client = useContext(CabalContext);

  const [channels, setChannels] = useState([]);
  const [joinedChannels, setJoinedChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState('default');

  const { currentCabal } = useCabal();

  useEffect(() => {
    if (!client) return;
    const channels = client.getChannels();
    const joinedChannels = client.getJoinedChannels();
    const channel = client.getCurrentChannel();
    setChannels(channels);
    setCurrentChannel(channel);
    setJoinedChannels(joinedChannels);
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
  };
}
