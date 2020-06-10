import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ErrorLoadingProps {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  max-width: 768px;
  padding: 2% 4%;
  border-radius: 4px;
  box-shadow: 2px 2px 4px #0003;
  z-index: 1;

  @media screen and (max-width: 500px) {
    height: 100vh;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-weight: lighter;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  float: right;

  svg {
    color: #e54050;
    transition: 0.3s;
  }

  &:hover svg {
    color: ${shade(0.2, '#e54050')};
  }
`;

export const ErrorLoading = styled.div<ErrorLoadingProps>`
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
