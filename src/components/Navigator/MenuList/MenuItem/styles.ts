import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.button.attrs({
  type: 'button',
})<ContainerProps>`
  text-transform: capitalize;
  min-height: 45px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  border: 0;
  background: 0;
  ${({ active }) =>
    !active &&
    css`
      opacity: 0.7;
    `}
`;
