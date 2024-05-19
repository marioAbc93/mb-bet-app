import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const TicketButtonComponent = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  background: hsl(223, 10%, 50%, 0.2);
  border: none;
  &:active {
    transform: scale(0.9);
  }
`;
