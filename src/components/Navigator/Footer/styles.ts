import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;
