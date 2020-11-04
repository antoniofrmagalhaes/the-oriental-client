import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri';

import { MenuButton, Bars } from './styles';

interface OpenOrderButtonProps {
  open: boolean;
  toggleHandler: () => void;
}

const OpenOrderButton: React.FC<OpenOrderButtonProps> = ({
  open,
  toggleHandler,
}) => {
  return (
    <MenuButton onClick={() => toggleHandler()} open={open}>
      {open ? <Bars open /> : <RiShoppingBag3Fill />}
    </MenuButton>
  );
};

export default OpenOrderButton;
