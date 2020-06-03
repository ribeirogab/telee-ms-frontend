import styled from 'styled-components';
import { shade } from 'polished';

export const LastAcess = styled.div`
  margin-top: 40px;
  max-width: 100%;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 8px #0005;
  background-color: #fff;
  margin-bottom: 40px;
  h1 {
    font-size: 20px;
    color: #222;
    margin-bottom: 15px;
    font-weight: lighter;
  }
  .box {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    div strong {
      color: #333;
    }
    div span {
      width: 80px;
      display: inline-block;
      color: #555;
    }
  }
`;

export const News = styled.div`
  margin-top: 40px;
  max-width: 100%;
  padding: 50px 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 8px #0005;
  background-color: #fff;
  margin-bottom: 40px;
  text-align: center;
  h1 {
    font-size: 25px;
    color: #333;
    margin-bottom: 15px;
  }
  p {
    color: #555;
    .version {
      font-size: 20px;
      color: #29f;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.2s;
      transition: text-decoration 0.2s;
    }
    .version:hover {
      color: #29f8;
      text-decoration: underline;
    }
  }
`;

export const ContainerNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const BoxNews = styled.div`
  width: 31.3333333333%;
  margin: 1%;
  @media screen and (max-width: 991px) {
    width: 48%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
  }
  .box {
    line-height: 24px;
    border-radius: 8px;
    border: solid 1px #0005;
    padding: 20px;

    button {
      border: none;
      background: none;
      margin-top: 20px;

      & + button {
        margin-left: 10px;
      }

      svg {
        font-size: 25px;
        transition: color 0.3s;
      }
    }

    .edit {
      svg {
        color: #29f;
      }

      &:hover svg {
        color: ${shade(0.2, '#29f')};
      }
    }

    .delete {
      svg {
        color: #c53030;
      }

      &:hover svg {
        color: ${shade(0.2, '#c53030')};
      }
    }
  }
`;

export const ToolsBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    color: #f4434b;
    border: solid 1px #f4434b;
    transition: background-color 0.5s;

    span {
      margin-left: 5px;
    }

    &:hover {
      background-color: #f442;
    }
  }
`;
