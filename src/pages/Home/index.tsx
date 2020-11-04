import React from 'react';

import Navigator from '../../components/Navigator';
import ProductList from '../../components/ProductList';
import Order from '../../components/Order';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navigator />
      <ProductList />
      <Order />
    </Container>
  );
};

export default Home;
