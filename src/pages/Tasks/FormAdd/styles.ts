import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 2%;
  max-width: 768px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 4px 4px 16px #0006;
  @media screen and (max-width: 500px) {
    justify-content: center;
    height: 100%;
    padding: 10px;
  }
  h2 {
    color: #333;
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
  }
  .input {
    margin: 10px 0;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  .input {
    width: 49%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    .input {
      width: 100%;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-top: 20px;
    border: none;
    height: 46px;
    padding: 0 25px;
    background-color: #666;
    color: #fff;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s;
    font-size: 16px;
  }
  button:hover {
    opacity: 0.8;
  }
  button + button {
    margin-left: 10px;
    background-color: #303f9f;
  }
`;
