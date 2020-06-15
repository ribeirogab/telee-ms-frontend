import React from 'react';

import { Container } from './styles';

import anythingSvg from '../../assets/anything.svg';

interface AnythingProps {
  text?: string;
}

const Anything: React.FC<AnythingProps> = ({ text }) => {
  return (
    <Container>
      <img src={anythingSvg} alt="anything" />
      <h1>{text}</h1>
    </Container>
  );
};

export default Anything;
