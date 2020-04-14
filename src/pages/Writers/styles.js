import styled from 'styled-components'

export const ToolsBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 15px;
  border-bottom: solid 1px #0001;
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

export const WritersContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const BoxWriter = styled.div`
  width: 49%;
  margin-bottom: 2%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  .box {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 25px;
    background-color: #fff;
    box-shadow: 2px 2px 4px #0001;
  }

  .box div:first-child {
    background-color: #F4434B;
    padding: 13px;
    border-radius: 100%;
    margin-right: 15px;
    color: #fff;
  }

  .box div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  
  .box div:nth-child(2) small {
    font-size: 14px;
    color: #666; 
  }

  .box div:last-child {
    margin-left: auto;
    cursor: pointer;
  }
`
