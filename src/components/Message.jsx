import React from 'react';
import styled from 'styled-components';
import stc from 'string-to-color';
import { format } from 'date-fns';

const Time = styled.span`
  color: grey;
  padding: 3px;
  margin-right: 4px;
  font-size: 0.8em;
`;

const User = styled.span`
  color: ${(props) => props.color};
  font-weight: 700;
  margin-right: 4px;
`;

const Text = styled.span`
  color: black;
`;
export default function Message({ item }) {
  const message = item?.value?.content?.text;
  const timestamp = item?.value?.timestamp;

  const date = format(new Date(timestamp), 'hh:mm:ss');

  const sender = item?.sender || item?.key?.slice(0, 7);
  const color = stc(item?.key);

  return (
    <div>
      <Time>{date} </Time>
      <User color={color}> {sender}: </User>
      <Text> {message} </Text>
    </div>
  );
}
