import styled from "styled-components";

export const EventContainerDiv = styled.div`
  padding: 10px;
  border: ${({ theme }) => `1px solid ${theme.color}`};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

export const MarketContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  flex-grow: 1;

  button {
    flex: 1;
  }
`;
