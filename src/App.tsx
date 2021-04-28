import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Client from 'cabal-client';

const client = new Client({});

export default function App() {
  console.log('client is', client);
  return (
    <div>
      <h1> Hello</h1>
    </div>
  );
}
