import Client from 'cabal-client';
import React, { useEffect, useState } from 'react';

export function createCabalClient(dbdir = `/tmp/.cabal-desktop/v2`) {
  const client = new Client({
    config: {
      dbdir,
    },
  });

  return client;
}

export const CabalContext = React.createContext<any>(null);

export function CabalProvider({ children, initCabal, dbdir }: any) {
  const [client, setClient] = useState();

  async function initializeCabals() {
    const cabalClient = createCabalClient(dbdir);
    if (initCabal) {
      await cabalClient.addCabal(initCabal);

      await cabalClient.addCabal(
        'a69fe8ad12f1177080cc926e2b552b336cfd26060d07e1221f8c4e6626c89dc4'
      );
      setClient(cabalClient);
    }
  }
  useEffect(() => {
    initializeCabals();
  }, []);

  return (
    <CabalContext.Provider value={client}>{children}</CabalContext.Provider>
  );
}
