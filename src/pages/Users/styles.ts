import styled from 'styled-components';

export const ToolsBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  border-bottom: solid 1px #0001;

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

export const UsersContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BoxUser = styled.div`
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
  .box .avatar {
    background-color: #f4434b;
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
`;
