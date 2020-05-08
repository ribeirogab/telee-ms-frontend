import styled from 'styled-components';

export const Menu = styled.nav`
  background: #e75656;
  padding: 7px 17px;
  box-shadow: 2px 2px 8px #0004;

  .side {
    display: flex;
    align-items: center;
    color: #fff;

    button {
      background: none;
      border: none;
      border-radius: 50%;
      padding: 10px;
      color: #fff;
      transition: background-color 0.2s;

      &:hover {
        background: #d448;
      }
    }

    p {
      margin-left: 15px;
      font-size: 20px;
    }
  }
`;

export const Sidebar = styled.div`
  width: 250px;

  a {
    text-decoration: none;
    color: #333;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: solid 1px #0002;

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background-color: purple;
    border-radius: 50%;
    color: #fff;
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  button {
    background: none;
    border: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
