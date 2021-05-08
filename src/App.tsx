import React, { useEffect } from 'react';
import { useChannel, useMessage } from './lib';

export default function App() {
  const { messages } = useMessage();
  const { focusChannel } = useChannel();

  useEffect(() => {
    focusChannel('default');
  });
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
