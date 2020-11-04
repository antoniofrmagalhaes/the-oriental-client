import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  & + li {
    margin-top: 8px;
  }
  @media screen and (min-width: 1024px) {
    height: 90px;
  }
  @media screen and (min-width: 1366px) {
    height: 100px;
  }
  @media screen and (min-width: 1680px) {
    height: 120px;
    padding: 8px 16px;
    & + li {
      margin-top: 16px;
    }
  }
  @media screen and (min-width: 1920px) {
    height: 120px;
  }
`;

export const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 8px;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 1024px) {
    width: 65px;
    height: 65px;
  }
  @media screen and (min-width: 1366px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1680px) {
    width: 80px;
    height: 80px;
    margin-right: 16px;
  }
  @media screen and (min-width: 1920px) {
    width: 83px;
    height: 83px;
  }
`;

export const ProductInfo = styled.div`
  position: relative;
  flex: 1;
  width: 90px;
  height: 90px;
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    span {
      display: -webkit-box;
      margin-top: 3px;
      opacity: 0.5;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.secondaryText};
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 65px;
  }
  @media screen and (min-width: 1366px) {
    height: 75px;
  }
  @media screen and (min-width: 1680px) {
    height: 80px;
  }
  @media screen and (min-width: 1920px) {
    height: 83px;
  }
`;

export const Price = styled.strong`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 15px;
`;

export const DeleteProductButton = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  width: 16px;
  top: 0;
  right: 12px;
  border: 0;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.primaryText};
  background: 0;
  &:hover {
    opacity: 1;
  }
  > svg {
    width: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 16px;
    right: 8px;
    > svg {
      width: 16px;
    }
  }
  @media screen and (min-width: 1366px) {
    width: 18px;
    > svg {
      width: 18px;
    }
  }
  @media screen and (min-width: 1680px) {
    width: 20px;
    > svg {
      width: 20px;
    }
  }
  @media screen and (min-width: 1920px) {
    width: 24px;
    > svg {
      width: 24px;
    }
  }
`;

export const CounterContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  border: 1px solid #dddddd;
  > p {
    width: 28px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
  }
  > div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.7;
    border: 0;
    background: 0;
    > svg {
    }
    border: 0;
    background: 0;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (min-width: 1024px) {
    > p {
      width: 22px;
      height: 20px;
    }
    > div {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 1680px) {
    > p {
      width: 26px;
      height: 22px;
    }
    > div {
      width: 22px;
      height: 22px;
    }
  }
  @media screen and (min-width: 1920px) {
    > p {
      width: 30px;
      height: 24px;
    }
    > div {
      width: 24px;
    }
  }
`;
