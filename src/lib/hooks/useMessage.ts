import { useContext, useState, useEffect } from 'react';
import { CabalContext } from '../index';
import { useChannel } from './useChannel';

export function useMessage() {
  const [messages, setMessages] = useState<Array<any>>([]);
  const client = useContext(CabalContext);

  const { currentChannel } = useChannel();

  useEffect(() => {
    if (client) {
      console.log('this is called haha');
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
        console.log('and here ', msg.channel, currentChannel);
        if (msg.channel === currentChannel) {
          console.log('reaching here yyay');
          setMessages((messages) => [...messages, msg.message]);
        }
      });
    }
  }, [currentChannel]);

  return {
    messages,
  };
}
