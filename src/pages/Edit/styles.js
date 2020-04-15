import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;

  @media screen and (max-width: 1350px) {
    background-color: #fff;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  padding: 20px;

  a {
    padding-right: 10px;
    border-right: solid 1px #0002;
    display: flex;
    align-items: center;
    color: #4DC0FF;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #2DA0EF;
  }

  span {
    margin-left: 10px;
  }
`

export const Status = styled.span`
  color: ${props => props.color};
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  span {
    padding-right: 10px;
    border-right: solid 1px #0002;
    display: flex;
    align-items: center;
    color: #4DC0FF;
    cursor: pointer;
    transition: color 0.2s;
  }

  span:hover {
    color: #2DA0EF;
  }

  .settings {
    margin-left: 10px;
    color: #999;
    cursor: pointer;
    transition: color 0.3s;
  }

  .settings:hover {
    color: #333;
  }
`
export const Values = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: ${props => props.open ? '0px' : '-120px'};

  @media screen and (max-width: 1100px) {
    background-color: #fff;
  }
`

export const Words = styled.span`
  font-size: 14px;
  color: #999;
  font-weight: lighter;
`

export const Money = styled.span`
  margin-top: 5px;
  font-size: 20px;
  color: #309965;
  font-weight: lighter;
`
export const ToggleValues = styled.div`
  padding-top: 3px;
  background-color: #4DC0FF;
  color: #fff;
  position: absolute;
  left: -28px;
  bottom: 16px;
  cursor: pointer;
`
