import { useContext, useState, useEffect } from 'react';
import { CabalContext } from '../index';

export function useCabal() {
  const [cabals, setCabals] = useState<Array<any>>([]);
  const [currentCabal, setCurrentCabal] = useState<any>();

  const client = useContext(CabalContext);

  useEffect(() => {
    if (!client) return;
    const cabals = client.getCabalKeys();
    const cabal = client.getCurrentCabal();

    setCabals(cabals);
    setCurrentCabal(cabal);
  }, [client]);

  // add a new cabal
  function addCabal(key: string) {
    client.addCabal(key).then(() => {
      const cabals = client.getCabalKeys();
      setCabals(cabals);
    });
  }

  return {
    cabals,
    currentCabal,
    addCabal,
  };
}