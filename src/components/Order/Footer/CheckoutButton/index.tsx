import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CheckoutButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button type="button" {...props}>
      {children}
    </Button>
  );
};

export default CheckoutButton;
