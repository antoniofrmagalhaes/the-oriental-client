import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  height: calc(100% - 82px - 40px);
  padding: 0 16px;
  overflow-y: scroll;
  @media screen and (min-width: 1024px) {
    height: calc(100% - 82px);
    padding: 0 4px 0 16px;
    scrollbar-color: ${({ theme }) => theme.colors.primary} transparent;
    scrollbar-width: default;
    &::-webkit-scrollbar {
      width: 12px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Title = styled.p`
  text-transform: capitalize;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`;
