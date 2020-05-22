import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  width: 100%;
  padding: 0 16px;
  border: 1.5px solid #232129;
  color: #666360;
  ${props =>
    props.isFocused &&
    css`
      color: #f07a7a;
      border-color: #f07a7a;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #f07a7a;
    `}
  & + div {
    margin-top: 8px;
  }
  input {
    color: #f4ede8;
    background: transparent;
    border: none;
    padding: 16px 0;
    flex: 1;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
