import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 40px - 180px);
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  @media screen and (min-width: 375px) {
    height: calc(100% - 40px - 280px);
  }
  @media screen and (min-width: 420px) {
    height: calc(100% - 40px - 310px);
  }
  @media screen and (min-width: 1024px) {
    height: calc(100% - 40px - 200px);
  }
  @media screen and (min-width: 1280px) {
    height: calc(100% - 40px - 240px);
  }
  @media screen and (min-width: 1366px) {
    height: calc(100% - 40px - 260px);
  }
  @media screen and (min-width: 1440px) {
    height: calc(100% - 40px - 275px);
  }
  @media screen and (min-width: 1680px) {
    height: calc(100% - 40px - 320px);
  }
  @media screen and (min-width: 1920px) {
    height: calc(100% - 40px - 365px);
  }
`;

export const Label = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.ul`
  overflow-y: auto;
  scrollbar-color: #dddddd #eeeeee;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
  }
`;
