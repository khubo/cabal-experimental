import { useContext, useState, useEffect } from 'react';
import { uniqBy } from 'lodash';
import { CabalContext } from './index';

export function useMessage() {
  const [messages, setMessages] = useState<Array<any>>([]);
  const client = useContext(CabalContext);

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
        const allMessages = [...messages, msg.message];
        setMessages(allMessages);
      });
    }
  }, [client]);

  return {
    messages,
  };
}
