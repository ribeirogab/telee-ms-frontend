import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ToggleSideBarButtonProps {
  sidebarOpen?: boolean;
}

interface ToolsBarProps {
  pageY: number;
}

interface ContainerSidebarProps {
  pageY: number;
}

interface ContentContainerProps {
  sidebarOpen?: boolean;
}

export const Container = styled.div``;

export const ToolsBar = styled.div<ToolsBarProps>`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  box-shadow: 2px 2px 8px #0002;

  ${props =>
    props.pageY >= 60 &&
    css`
      top: 0;
      position: fixed;
    `}

  .left-tools {
    a {
      color: #333;
      transition: color 0.3s;

      &:hover {
        color: #e75656;
      }
    }
  }

  .right-tools {
    display: flex;
    align-items: center;

    button {
      padding: 8px;
      transition: background-color 0.3s;
    }

    button + button {
      margin-left: 14px;
    }
  }
`;

export const ViewPageButton = styled.button`
  border: solid 1px #e75656;
  background: #fcfcfb;
  color: #e75656;

  &:hover {
    background: ${shade(0.1, '#fcfcfb')};
  }
`;

export const PublishOrUpdateButton = styled.button`
  border: none;
  border: solid 1px #d64545;
  background: #e75656;
  color: #fcfcfb;

  &:hover {
    background: ${shade(0.1, '#e75656')};
  }
`;

export const ToggleSideBarButton = styled.button<ToggleSideBarButtonProps>`
  display: flex;
  align-items: center;
  background: #fcfcfb;
  border: solid 1px #333;

  &:hover {
    background: ${shade(0.1, '#fcfcfb')};
  }

  ${props =>
    props.sidebarOpen &&
    css`
      background: #333;
      color: #fcfcfb;

      &:hover {
        background: ${shade(0.2, '#333')};
      }
    `}
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  justify-content: space-between;
  padding-left: 4%;

  ${props =>
    props.sidebarOpen &&
    css`
      margin-right: 300px;
    `}

  @media only screen and (max-width: 500px) {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-right: 4%;
`;

export const ContainerSidebar = styled.div<ContainerSidebarProps>`
  width: 300px;
  position: fixed;
  height: 100vh;
  background: #fff;
  border-top: solid 1px #0003;
  border-left: solid 1px #0003;
  right: 0;
  top: ${props => 118 - props.pageY}px;

  ${props =>
    props.pageY >= 60 &&
    css`
      top: 61px;
    `}
`;

export const Sidebar = styled.div`
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  overflow: scroll;

  > div {
    border-bottom: solid 1px #0002;
    padding-bottom: 15px;

    strong {
      color: #222;
    }
  }

  > div + div {
    margin-top: 20px;
  }
`;

export const StatusAndVisibility = styled.div`
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      color: #555;
    }

    span.value {
      color: #67e;
      text-decoration: underline;
    }
  }
`;

export const PermaLink = styled.div`
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    font-size: 14px;

    span {
      color: #555;
      margin-bottom: 5px;
    }

    input {
      padding: 5px;
      color: #333;
      border: solid 1px #0003;
      border-radius: 8px;
    }
  }
`;

export const Yoast = styled.div`
  margin-top: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: solid 1px #0002;

  > div {
    display: flex;
    flex-direction: column;
    strong {
      color: #222;
      margin-bottom: 5px;
    }
    input {
      padding: 5px;
      color: #333;
      border: solid 1px #0003;
      border-radius: 8px;
    }
  }
`;

export const PreviewGoogle = styled.div`
  margin-top: 15px;

  h3 {
    font-weight: lighter;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    span {
      color: #333;
      margin-bottom: 5px;
    }

    textarea {
      padding: 5px;
      height: 200px;
      color: #333;
      border: solid 1px #0003;
      border-radius: 8px;
      resize: none;
    }
  }
`;

export const PreviewBlock = styled.div`
  box-shadow: 2px 2px 8px #0002;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;

  div.header {
    display: flex;
    flex-direction: row;

    svg {
      margin-right: 10px;
      color: #448;
    }

    small {
      color: #444;
    }
  }

  div.body {
    h3 {
      color: #2367d2;
      font-weight: normal;
    }

    p {
      font-size: 15px;
      color: #333;
      margin-top: 10px;
    }
  }
`;
