import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #0005;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 6px solid #0003;
    border-left-color: #ee595a;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
