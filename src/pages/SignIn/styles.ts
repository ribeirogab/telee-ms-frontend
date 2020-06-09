import styled, { css } from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/login-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

interface ErrorLogin {
  error: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
  h1 {
    color: #333;
    margin-bottom: 24px;
  }
  a {
    color: #797979;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#656565')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
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
