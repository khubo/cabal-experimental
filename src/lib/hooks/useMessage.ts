import { useContext, useState, useEffect } from 'react';
import { CabalContext } from '../CabalProvider';
import { useCabal } from './useCabal';
import { useChannel } from './useChannel';

export function useMessage(channel) {
  const [messages, setMessages] = useState<Array<any>>([]);
  const client = useContext(CabalContext);
  const { currentCabal } = useCabal();
  const messageHandler = (msg: any) => {
    console.log('new messageies', msg);
    if (msg.channel === channel) {
      setMessages((messages) => [...messages, msg.message]);
    }
  };
  useEffect(() => {
    if (!client) return;
    client.getMessages(
      {
        channel,
      },
      (allMessages: Array<any>) => {
        setMessages(allMessages);
      }
    );
    const cabal = client.getCurrentCabal();
    cabal.on('new-message', messageHandler);

    return () => cabal.removeListener('new-message', messageHandler);

    console.log('called againnnns');
  }, [channel, currentCabal, client]);

  return {
    messages,
  };
}
