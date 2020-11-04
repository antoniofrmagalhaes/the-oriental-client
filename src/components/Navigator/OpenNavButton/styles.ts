import styled, { css } from 'styled-components';

interface MenuButtonProps {
  open: boolean;
  orientation?: string;
  mobileOnly?: boolean;
}

export const MenuButton = styled.div<MenuButtonProps>`
  cursor: pointer;
  z-index: 2;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 16px;
  right: -42px;
  ${({ open }) =>
    open &&
    css`
      right: 16px;
    `};

  @media screen and (min-width: 1024px) {
    display: none;
  }

  @media screen and (min-width: 375px) {
    width: 24px;
    height: 24px;
  }
`;

/* Burger to X animation */

const open = css`
  background-color: transparent;
`;

const afterOpen = css`
  top: 0;
  transform: rotate(-45deg);
`;

const beforeOpen = css`
  top: 0;
  transform: rotate(45deg);

  @supports (-moz-appearance: none) {
    top: 0rem;
  }
`;

export const Bars = styled.span<MenuButtonProps>`
  content: '';
  position: absolute;
  height: 3px;
  width: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 150ms;

  ${props => props.open && open}
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 1;
    top: 16px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 250ms;
    /* fixs a "bug" on firefox browsers */

    @supports (-moz-appearance: none) {
      top: 9.6px;
    }
    ${props => props.open && beforeOpen}
  }
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 1;
    top: -16px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 250ms;
    ${props => props.open && afterOpen}
  }
`;
