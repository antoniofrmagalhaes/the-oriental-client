import React from 'react';
import { RiAddFill, RiDeleteBinLine, RiSubtractLine } from 'react-icons/ri';

import { Product } from '../../../../store/modules/order/types';

import {
  Container,
  ProductImage,
  ProductInfo,
  CounterContainer,
  DeleteProductButton,
  Price,
} from './styles';

import { formatPrice } from '../../../../utils/formatPrice';

import { useOrders } from '../../../../contexts/OrdersContext';

interface ProductCard {
  product: Product;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const {
    handleIncrementProduct,
    handleDecrementProduct,
    handleRemoveProduct,
  } = useOrders();
  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <p>
          {product.name}
          <span>{product.description}</span>
        </p>
        <div>
          <Price>{formatPrice(product.amount * product.price)}</Price>
          <CounterContainer>
            <div onClick={() => handleDecrementProduct(product)}>
              <RiSubtractLine />
            </div>
            <p>{product.amount}</p>
            <div onClick={() => handleIncrementProduct(product)}>
              <RiAddFill />
            </div>
          </CounterContainer>
          <DeleteProductButton onClick={() => handleRemoveProduct(product._id)}>
            <RiDeleteBinLine />
          </DeleteProductButton>
        </div>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
