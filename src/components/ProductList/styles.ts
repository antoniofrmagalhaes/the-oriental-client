import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 1px;
  color: ${({ theme }) => theme.colors.primaryText};
  @media screen and (min-width: 1024px) {
    width: calc(75% - 200px);
  }
  @media screen and (min-width: 1280px) {
    width: calc(75% - 240px);
  }
  @media screen and (min-width: 1366px) {
    width: calc(75% - 260px);
  }
  @media screen and (min-width: 1440px) {
    width: calc(75% - 275px);
  }
  @media screen and (min-width: 1680px) {
    width: calc(75% - 320px);
  }
  @media screen and (min-width: 1920px) {
    width: calc(75% - 365px);
  }
`;

export const PageHeader = styled.div`
  width: 100%;
  height: 40px;
  @media (min-width: 1024px) {
    display: none;
  }
`;
