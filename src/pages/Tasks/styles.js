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
