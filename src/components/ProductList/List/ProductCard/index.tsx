import React from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';

import {
  Container,
  ProductImage,
  Content,
  Price,
  CounterContainer,
  AddProductButton,
} from './styles';

import { Product } from '../../../../store/modules/order/types';
import { formatPrice } from '../../../../utils/formatPrice';
import { useOrders } from '../../../../contexts/OrdersContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { productsAmount, handleAddProduct } = useOrders();

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <Content>
        <p>{product.name}</p>
        <small>{product.description}</small>
        <CounterContainer>{productsAmount[product._id]}</CounterContainer>
        <Price>{formatPrice(product.price)}</Price>
        <AddProductButton onClick={() => handleAddProduct(product)}>
          <RiShoppingBag3Line />
        </AddProductButton>
      </Content>
    </Container>
  );
};

export default ProductCard;
