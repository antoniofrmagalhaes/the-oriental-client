import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  &::after {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    margin: 1px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary} transparent
      ${({ theme }) => theme.colors.primary} transparent;
    animation: ${rotate} 1.1s linear infinite;
  }
`;
