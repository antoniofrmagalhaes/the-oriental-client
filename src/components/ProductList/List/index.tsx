import React from 'react';
import { useProducts } from '../../../contexts/ProductsContext';

import ProductCard from './ProductCard';

import { Container, Title } from './styles';

const List: React.FC = () => {
  const { groupedByCategory } = useProducts();
  return (
    <Container>
      {groupedByCategory.map(group => (
        <div key={group.category}>
          <Title>{group.category}</Title>
          {group.products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default List;
