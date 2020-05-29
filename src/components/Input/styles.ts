import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 4px 16px;
  border: 1.5px solid #fff;
  color: #666360;
  box-shadow: 2px 2px 8px #0002;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9696;
      border-color: #ff9696;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9696;
    `}
  & + div {
    margin-top: 8px;
  }
  input {
    color: #232129;
    background: transparent;
    border: none;
    padding: 12px 0;
    flex: 1;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
