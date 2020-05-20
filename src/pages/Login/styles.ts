import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    background-color: #fff;
    box-shadow: 2px 2px 8px #0002;
    border-radius: 8px;

    h1 {
      text-align: center;
      margin-bottom: 25px;
      color: #fe4762;
      letter-spacing: 2px;
    }

    input + input {
      margin-top: 10px;
    }

    input {
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
      color: #333;
      border: none;
      box-shadow: 2px 2px 8px #0003;
    }

    button {
      width: 100%;
      margin-top: 25px;
      height: 45px;
      font-size: 16px;
      background-color: #fe4762;
      color: #fff;
      font-weight: bold;
      letter-spacing: 2px;
      box-shadow: 2px 2px 8px #0003;
      transition: background-color 0.3s;

      &:hover {
        background-color: #de2742;
      }
    }
  }
`;
