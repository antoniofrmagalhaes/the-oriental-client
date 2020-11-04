import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 45px;
  font-weight: bold;
  font-size: 16px;
  color: #2e2e2e;
  border-radius: 4px;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 1024px) {
    height: 35px;
  }
  @media screen and (min-width: 1440px) {
    height: 40px;
  }
  @media screen and (min-width: 1920px) {
    height: 45px;
  }
`;
