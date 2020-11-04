import React from 'react';

import ProductCard from './ProductCard';

import { List, ListHeader } from './styles';

import { useOrders } from '../../../contexts/OrdersContext';

const ProductList: React.FC = () => {
  const { order, handleRemoveAllProducts } = useOrders();
  return (
    <>
      <ListHeader>
        <p>Meu pedido</p>
        <div onClick={() => handleRemoveAllProducts()}>Remover todos</div>
      </ListHeader>
      <List>
        {order.products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </List>
    </>
  );
};

export default ProductList;
