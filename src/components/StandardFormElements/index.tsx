import React from 'react';

import {
  ContainerFormElement,
  InputGroupElement,
  ButtonGroupElement,
} from './styles';

interface Props {
  children: React.ReactNode;
}

export const ContainerForm = ({ children }: Props): JSX.Element => {
  return <ContainerFormElement>{children}</ContainerFormElement>;
};

export const InputGroup = ({ children }: Props): JSX.Element => {
  return <InputGroupElement>{children}</InputGroupElement>;
};

export const ButtonGroup = ({ children }: Props): JSX.Element => {
  return <ButtonGroupElement>{children}</ButtonGroupElement>;
};
