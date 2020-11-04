import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  height: 180px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  @media screen and (min-width: 375px) {
    width: 280px;
    height: 280px;
  }
  @media screen and (min-width: 420px) {
    width: 310px;
    height: 310px;
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 240px;
  }
  @media screen and (min-width: 1366px) {
    width: 260px;
    height: 260px;
  }
  @media screen and (min-width: 1440px) {
    width: 275px;
    height: 275px;
  }
  @media screen and (min-width: 1680px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1920px) {
    width: 365px;
    height: 365px;
  }
`;
