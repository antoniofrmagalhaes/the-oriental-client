import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.base};
`;

export const ProductListContainer = styled.div`
  width: 100%;
  height: 100%;
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

export const Two = styled.div``;
export const Three = styled.div``;
