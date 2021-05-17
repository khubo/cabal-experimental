import { useContext, useState, useEffect } from 'react';
import { CabalContext } from '../CabalProvider';
import { useChannel } from './useChannel';

export function useMessage() {
  const [messages, setMessages] = useState<Array<any>>([]);
  const client = useContext(CabalContext);

  const { currentChannel } = useChannel();

  useEffect(() => {
    if (client) {
      client.getMessages(
        {
          channel: 'default',
        },
        (allMessages: Array<any>) => {
          setMessages(allMessages);
        }
      );
      const cabal = client.getCurrentCabal();
      cabal.on('new-message', (msg: any) => {
        if (msg.channel === currentChannel) {
          setMessages((messages) => [...messages, msg.message]);
        }
      });
    }
  }, [currentChannel]);

  return {
    messages,
  };
}
