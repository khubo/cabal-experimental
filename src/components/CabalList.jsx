import React from 'react';
import styled from 'styled-components';
import { useCabal } from '../lib';

const Container = styled.div`
  background-color: grey;
  padding: 5px;
  width: 25%;
`;

const CabalContainer = styled.div`
  height: 40px;
  width: 40px;
  margin: 3px;
  margin-bottom: 12px;
  background-color: ${(props) => (props.selected ? '#3b668c' : '#967296')};
  padding: 10px;
  border-radius: 20%;
`;
export default function CabalList() {
  const { cabals, currentCabal, focusCabal } = useCabal();
  const currentCabalKey = currentCabal?.key;

  return (
    <Container>
      {cabals.map((item) => (
        <CabalContainer
          onClick={() => focusCabal(item)}
          selected={currentCabalKey === item}
        >
          {item.slice(0, 2)}
        </CabalContainer>
      ))}
    </Container>
  );
}
