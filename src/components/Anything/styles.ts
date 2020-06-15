import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 600px;
    width: 100%;
  }

  h1 {
    max-width: 700px;
    width: 100%;
    margin-top: 10px;
    color: #e75656;
    font-weight: lighter;
    text-transform: lowercase;
    text-align: center;
    line-height: 45px;
  }
`;
