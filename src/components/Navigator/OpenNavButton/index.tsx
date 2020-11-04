import React from 'react';

import { MenuButton, Bars } from './styles';

interface OpenNavButtonProps {
  open: boolean;
  toggleHandler: () => void;
}

const OpenNavButton: React.FC<OpenNavButtonProps> = ({
  open,
  toggleHandler,
}) => {
  return (
    <MenuButton onClick={() => toggleHandler()} open={open}>
      <Bars open={open} />
    </MenuButton>
  );
};

export default OpenNavButton;
