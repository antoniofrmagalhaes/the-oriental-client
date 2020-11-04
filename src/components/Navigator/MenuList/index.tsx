import React from 'react';

import MenuItem from './MenuItem';

import { Container, Label, Content } from './styles';

import { useProducts } from '../../../contexts/ProductsContext';

const MenuList: React.FC = () => {
  const { groupedByCategory } = useProducts();
  return (
    <Container>
      <Label>Cardápio</Label>
      <Content>
        {groupedByCategory.map(({ category }) => (
          <MenuItem key={category}>{category}</MenuItem>
        ))}
      </Content>
    </Container>
  );
};

export default MenuList;
