import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ValuesProps {
  open: boolean;
}

interface UpdateArticleProps {
  isOpen: boolean;
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

  button {
    font-size: 14px;
    padding-right: 10px;
    /* border-right: solid 1px #0002; */
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: #4dc0ff;
    cursor: pointer;
    transition: color 0.2s;
  }
  button:hover {
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

export const UpdateArticle = styled.div<UpdateArticleProps>`
  position: absolute;
  background-color: #fff;
  box-shadow: 2px 2px 8px #0003;
  border-radius: 8px;
  top: 50px;
  right: 2%;
  padding: 10px 0;

  ${props =>
    !props.isOpen &&
    css`
      display: none;
    `}

  h1 {
    font-size: 23px;
    margin-left: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  .body {
    padding: 5px 20px;
    border-top: solid 1px #0001;
    border-bottom: solid 1px #0001;

    div {
      display: flex;
      margin: 5px 0;

      .radio {
        width: 25px;
      }

      .change-update {
        color: #333;
        flex-direction: column;
        align-items: flex-start;

        small {
          color: #888;
        }
      }
    }
  }

  .footer {
    margin-top: 10px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;

    .btn-cancel {
      color: #666;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#666')};
      }
    }

    .btn-update {
      background-color: #4dc0ff;
      color: #fff;
      padding: 7px 10px;
      border-radius: 4px;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#4dc0ff')};
      }
    }
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
