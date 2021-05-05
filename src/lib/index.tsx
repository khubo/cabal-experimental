import Client from 'cabal-client';
import React, { useEffect, useState } from 'react';

export function createCabalClient(dbdir: string = `/tmp/.cabal-desktop/v2`) {
  const client = new Client({
    config: {
      dbdir,
    },
  });

  return client;
}

export const CabalContext = React.createContext<any>(null);

export function CabalProvider(props: any) {
  const [client, setClient] = useState();

  async function initializeCabals() {
    const client = createCabalClient(props.dbdir);
    const cabals = client.getCabalKeys();
    if (props.initCabal) {
      await client.addCabal(props.initCabal);
      setClient(client);
    }
  }
  useEffect(() => {
    initializeCabals();
  }, []);

  return (
    <CabalContext.Provider value={client}>
      {props.children}
    </CabalContext.Provider>
  );
}
