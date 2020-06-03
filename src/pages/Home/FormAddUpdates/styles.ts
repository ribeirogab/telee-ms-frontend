import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ErrorLogin {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 768px;
  padding: 20px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 4px #0003;

  form {
    flex: 1;

    h1 {
      margin-bottom: 20px;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
  }

  button.btn-cancel {
    background-color: #999;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#999')};
    }
  }
`;

export const ErrorLogin = styled.div<ErrorLogin>`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #c53030;
  opacity: 0;
  transition: opacity 0.2s;

  ${props =>
    props.error &&
    css`
      & {
        opacity: 1;
      }
    `}

  svg {
    margin-right: 8px;
  }
`;
