import styled, { css, keyframes } from 'styled-components';

interface OrderContainerProps {
  open: boolean;
}

const fromLeft = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
  }
`;

export const Container = styled.div<OrderContainerProps>`
  z-index: 2;
  width: 180px;
  border-right: 1px solid #222222;
  background: ${({ theme }) => theme.colors.background};
  > div {
    height: 100%;
  }
  @media (max-width: 1023px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    ${({ open }) =>
      open &&
      css`
        animation: ${fromLeft} 350ms ease forwards;
      `};
  }
  @media screen and (min-width: 375px) {
    width: 280px;
  }
  @media screen and (min-width: 420px) {
    width: 310px;
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
  }
  @media screen and (min-width: 1280px) {
    width: 240px;
  }
  @media screen and (min-width: 1366px) {
    width: 260px;
  }
  @media screen and (min-width: 1440px) {
    width: 275px;
  }
  @media screen and (min-width: 1680px) {
    width: 320px;
  }
  @media screen and (min-width: 1920px) {
    width: 365px;
  }
`;
