import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 110px;
  display: flex;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 2px 12px -10px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 250ms ease;
  animation: 250ms ${fadeIn} 250ms ease forwards;
  & + li {
    margin-top: 16px;
  }
  &:last-child {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 375px) {
    height: 130px;
  }
  @media screen and (min-width: 1024px) {
    height: 150px;
  }
  @media screen and (min-width: 1280px) {
    height: 170px;
  }
  @media screen and (min-width: 1366px) {
    height: 190px;
  }
  @media screen and (min-width: 1440px) {
    height: 210px;
  }
  @media screen and (min-width: 1680px) {
    height: 230px;
  }
  @media screen and (min-width: 1920px) {
    height: 250px;
  }
`;

export const ProductImage = styled.img`
  width: 90px;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 375px) {
    width: 130px;
  }
  @media screen and (min-width: 1024px) {
    width: 150px;
  }
  @media screen and (min-width: 1280px) {
    width: 170px;
  }
  @media screen and (min-width: 1366px) {
    width: 190px;
  }
  @media screen and (min-width: 1440px) {
    width: 210px;
  }
  @media screen and (min-width: 1680px) {
    width: 230px;
  }
  @media screen and (min-width: 1920px) {
    width: 250px;
  }
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  > p {
    display: -webkit-box;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  > small {
    display: -webkit-box;
    text-overflow: ellipsis;
    margin-top: 8px;
    font-size: 12px;
    opacity: 0.5;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Price = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: bold;
  font-size: 16px;
`;

export const CounterContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
`;

export const AddProductButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  border: 0;
  background: 0;
  &:hover {
    opacity: 1;
  }
  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
