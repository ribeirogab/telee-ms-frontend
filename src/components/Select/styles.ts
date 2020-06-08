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
  padding: 0 16px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 4px #0002;
  color: #666360;
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
  select {
    color: ${props => (props.isFilled ? '#312e38' : '#666360')};
    background: transparent;
    border: none;
    height: 50px;
    font-size: 16px;
    flex: 1;
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
