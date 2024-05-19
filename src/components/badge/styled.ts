import styled from "styled-components";

export const Badge = styled.div`
  position: absolute;
  top: -5px;
  left: -12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
  padding: 2px 6px;
  color: white;
  font-weight: bold;
  font-size: 11px;
  border-radius: 5px;
`;
