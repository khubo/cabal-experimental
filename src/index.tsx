import React from 'react';
import { render } from 'react-dom';
import { CabalProvider } from './lib';
import App from './App';

render(
  <CabalProvider
    initCabal={
      'f87c645aa32b932065a154b8031f4eed221ff76086350cacd892d4cb65e3e659'
    }
  >
    <App />
  </CabalProvider>,
  document.getElementById('root')
);
