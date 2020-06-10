import styled, { css } from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${props =>
    props.fullWidth &&
    css`
      position: absolute;
      height: 100vh;
      background: #0005;

      display: flex;
      justify-content: center;
      align-items: center;
    `}

  div {
    border: 4px solid #0003;
    border-left-color: #ee595a;
    margin: 0 auto;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
