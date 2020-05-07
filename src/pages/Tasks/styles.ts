import styled, { css } from 'styled-components';

interface PopoverProps {
  open: boolean;
  index: number;
}

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

  tbody tr td {
    padding: 20px;
    font-size: 15px;
  }

  button {
    background: none;
    border: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  .close-popover {
    color: #e75656;
  }
`;

export const Popover = styled.div<PopoverProps>`
  position: absolute;
  right: 5%;
  display: none;
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 2px 8px #0004;

  ${props =>
    props.open &&
    css`
      &.popover-${props.index} {
        display: flex;
      }
    `}

  button + button {
    border-top: solid 1px #0001;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px 20px;
    transition: background-color 0.3s;

    &:hover {
      background: #0001;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
