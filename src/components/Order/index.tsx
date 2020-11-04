import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import OpenOrderButton from './OpenOrderButton';
import Profile from './Profile';
import ProductList from './ProductList';
import Footer from './Footer';

import { Container } from './styles';

const Order: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container open={open}>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <OpenOrderButton open={open} toggleHandler={() => setOpen(!open)} />
        <Profile />
        <ProductList />
        <Footer />
      </OutsideClickHandler>
    </Container>
  );
};

export default Order;
