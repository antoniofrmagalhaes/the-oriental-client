import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import OpenNavButton from './OpenNavButton';
// import Logo from './Logo';
// import MenuList from './MenuList';
// import Footer from './Footer';

import { Container } from './styles';

const Navigator: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container open={open}>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <OpenNavButton open={open} toggleHandler={() => setOpen(!open)} />
        {/* <Logo />
        <MenuList />
        <Footer /> */}
      </OutsideClickHandler>
    </Container>
  );
};

export default Navigator;
