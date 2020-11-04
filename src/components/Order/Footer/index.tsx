import React from 'react';
import { useOrders } from '../../../contexts/OrdersContext';
import CheckoutButton from './CheckoutButton';

import { Container } from './styles';

const Footer: React.FC = () => {
  const {
    order,
    handleSendOrderRequest,
    subtotal,
    tax,
    deliveryFee,
    total,
  } = useOrders();

  return (
    <Container>
      <div>
        <p>Subtotal:</p>
        <strong>{subtotal}</strong>
      </div>
      <div>
        <p>Taxes:</p>
        <strong>{tax}</strong>
      </div>
      <div>
        <p>Delivery:</p>
        <strong>{deliveryFee}</strong>
      </div>
      <div>
        <p>Total:</p>
        <strong>{total}</strong>
      </div>
      <CheckoutButton
        onClick={() => handleSendOrderRequest()}
        disabled={order.products.length === 0}
      >
        Finalizar Pedido
      </CheckoutButton>
    </Container>
  );
};

export default Footer;
