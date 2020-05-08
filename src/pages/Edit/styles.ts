import styled from 'styled-components';

interface ValuesProps {
  open: boolean;
}

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  background-color: #fff;
  box-shadow: 2px 2px 4px #0001;
`;

export const HeaderLeft = styled.div`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  a {
    font-size: 14px;
    padding-right: 10px;
    border-right: solid 1px #0002;
    display: flex;
    align-items: center;
    color: #4dc0ff;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: #2da0ef;
  }
  span {
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const Status = styled.span`
  color: ${props => props.color};
`;

export const HeaderRight = styled.div`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  span {
    font-size: 14px;
    padding-right: 10px;
    border-right: solid 1px #0002;
    display: flex;
    align-items: center;
    color: #4dc0ff;
    cursor: pointer;
    transition: color 0.2s;
  }
  span:hover {
    color: #2da0ef;
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
`;
export const Values = styled.div<ValuesProps>`
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: ${props => (props.open ? '0px' : '-120px')};
  @media screen and (max-width: 1100px) {
    background-color: #fff;
    box-shadow: 2px 2px 10px #0004;
  }
`;

export const Words = styled.span`
  font-size: 14px;
  color: #999;
  font-weight: lighter;
`;

export const Money = styled.span`
  margin-top: 5px;
  font-size: 20px;
  color: #309965;
  font-weight: lighter;
`;
export const ToggleValues = styled.div`
  padding-top: 3px;
  background-color: #4dc0ff;
  color: #fff;
  position: absolute;
  left: -28px;
  bottom: 16px;
  cursor: pointer;
`;
