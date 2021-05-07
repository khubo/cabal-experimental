import React from 'react';
import { useMessage } from './lib';

export default function App() {
  const { messages } = useMessage();

  return (
    <div>
      <h1> Hello</h1>
      <ul>
        {messages.map((msg) => {
          return <div> {msg?.value?.content?.text}</div>;
        })}
      </ul>
    </div>
  );
}
