import styled from 'styled-components';

export const ProductListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  margin-bottom: 16px;
  > button {
    opacity: 0.7;
    border: 0;
    background: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 16px 0;
  > div {
    cursor: pointer;
    opacity: 0.7;
    border: 0;
    background: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  height: calc(100% - 150px - 32px - 25px - 20px - 16px);
  margin-bottom: 16px;
  overflow-y: scroll;
  scrollbar-width: none;
  background: ${({ theme }) => theme.colors.base};
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    height: calc(100% - 150px - 32px - 25px - 20px - 16px);
  }
  @media screen and (min-width: 1440px) {
    height: calc(100% - 180px - 32px - 25px - 20px - 16px);
  }
`;
