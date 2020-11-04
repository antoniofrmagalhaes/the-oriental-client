import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    > p {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 150px;
  }
  @media screen and (min-width: 1440px) {
    height: 180px;
  }
`;
