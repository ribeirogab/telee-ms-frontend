import styled from 'styled-components'

export const ToolsBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`

export const AddButton = styled.button`
  text-transform: uppercase;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  color: #F4434B;
  border: solid 1px #F4434B;
  transition: background-color 0.5s;

  &:hover{
    background-color: #F442;
  }
`

export const TableContainer = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  min-width: 768px;
  border-collapse: separate;
  border-spacing: 0 16px;
  margin-top: -8px;
  width: 100%;
  text-align: center;
  color: #333;

  tbody tr {
    background-color: #fff;
    margin: 0;
    box-shadow: 2px 2px 4px #0001;
  }

  tbody tr td{
    padding: 20px;
    font-size: 15px;
  }

`
export const DefaultForm = styled.form`
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
`

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
`

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
  }

  button:hover {
    opacity: 0.8;
  }

  button + button {
    margin-left: 10px;
    background-color: #303F9F;
  }
`
