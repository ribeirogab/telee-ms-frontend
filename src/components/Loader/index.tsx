import React from 'react';

import { Container } from './styles';

interface LoaderProps {
  fullWidth?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullWidth }) => {
  return (
    <Container fullWidth={fullWidth}>
      <div />
    </Container>
  );
};

export default Loader;
