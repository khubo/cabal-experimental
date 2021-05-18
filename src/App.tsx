import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useChannel, useMessage } from './lib';
export default function App() {
  const { messages } = useMessage();
  const { focusChannel } = useChannel();

  useEffect(() => {
    focusChannel('default');
  });
  return (
    <div>
      <h1> Hello World</h1>
      <ul>
        {messages.map((msg) => {
          return <div> {msg?.value?.content?.text}</div>;
        })}
        <View>
          <Text>Hello world from react native</Text>
        </View>
      </ul>
    </div>
  );
}
