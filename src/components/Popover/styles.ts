import styled, { css } from 'styled-components';

interface PopoverProps {
  position?: {
    X: number;
    Y: number;
  };
}

export const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 2px 8px #0004;

  ${props =>
    props.position &&
    css`
      top: ${props.position.Y + 15}px;
      left: ${props.position.X - 100}px;
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
