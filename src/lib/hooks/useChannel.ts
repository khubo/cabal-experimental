import { useContext, useState, useEffect } from 'react';
import { useCabal } from './useCabal';
import { CabalContext } from '../index';

export function useChannel() {
  const client = useContext(CabalContext);

  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState('default');

  const { currentCabal } = useCabal();

  useEffect(() => {
    if (!client) return;
    const channels = client.getChannels();
    const channel = client.getCurrentChannel();
    setChannels(channels);
    setCurrentChannel(channel);
  }, [currentCabal]);

  return {
    channels,
    currentChannel,
  };
}
