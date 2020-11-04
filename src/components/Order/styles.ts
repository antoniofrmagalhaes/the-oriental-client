import styled, { css, keyframes } from 'styled-components';

interface OrderContainerProps {
  open: boolean;
}

const fromLeft = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0);
  }
`;

export const Container = styled.div<OrderContainerProps>`
  z-index: 3;
  width: 25%;
  height: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.base};
  > div {
    height: 100%;
  }
  @media (max-width: 1023px) {
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    ${({ open }) =>
      open &&
      css`
        animation: ${fromLeft} 350ms ease forwards;
      `};
  }
  @media screen and (min-width: 1680px) {
    padding: 32px;
  }
`;
