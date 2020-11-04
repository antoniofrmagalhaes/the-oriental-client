import React from 'react';

import Search from './Search';
import List from './List';

import { Container, PageHeader } from './styles';

const ProductList: React.FC = () => {
  return (
    <Container>
      <PageHeader />
      <Search />
      <List />
    </Container>
  );
};

export default ProductList;
