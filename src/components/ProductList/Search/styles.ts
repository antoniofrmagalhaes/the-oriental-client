import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  > svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
  > input {
    text-decoration: none;
    flex: 1;
    height: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryText};
    border: 0;
    background: 0;
  }
`;
