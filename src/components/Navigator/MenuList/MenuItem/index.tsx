import React from 'react';

import { Container } from './styles';

const MenuItem: React.FC = ({ children }) => {
  const [active, setActive] = React.useState(true);
  return (
    <Container active={active} onClick={() => setActive(!active)}>
      {children}
    </Container>
  );
};

export default MenuItem;
