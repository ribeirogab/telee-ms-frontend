import React, { useState, useCallback } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { IconType } from 'react-icons';
import { FiMoreHorizontal, FiXCircle } from 'react-icons/fi';

import { Container, Popover } from './styles';

interface PopoverProps {
  children: React.ReactNode;
  indexLoop?: number;
  ElementOpenIcon?: IconType;
  ElementCloseIcon?: IconType;
}

const PopoverComponent = ({
  children,
  ElementOpenIcon,
  ElementCloseIcon,
}: PopoverProps): JSX.Element => {
  const [openPopover, setOpenPopover] = useState(false);
  const [positionPopoverX, setPositionPopoverX] = useState(-1);
  const [positionPopoverY, setPositionPopoverY] = useState(-1);

  const handleClickAway = useCallback(() => {
    setOpenPopover(false);
  }, []);

  const handlePositionPopover = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      setPositionPopoverX(event.clientX);
      setPositionPopoverY(event.clientY);
    },
    [],
  );

  const handlePopover = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      setOpenPopover(!openPopover);
      handlePositionPopover(event);
    },
    [handlePositionPopover, openPopover],
  );

  const handleClosePopover = useCallback(() => setOpenPopover(false), []);

  // default icons
  const CloseIcon = ElementCloseIcon || FiXCircle;
  const OpenIcon = ElementOpenIcon || FiMoreHorizontal;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        <button type="button" onClick={handlePopover}>
          {openPopover ? (
            <CloseIcon className="close-popover" size={25} />
          ) : (
            <OpenIcon size={25} />
          )}
        </button>
        {openPopover ? (
          <Popover
            position={{ X: positionPopoverX, Y: positionPopoverY }}
            onClick={handleClosePopover}
          >
            {children}
          </Popover>
        ) : null}
      </Container>
    </ClickAwayListener>
  );
};

export default PopoverComponent;
