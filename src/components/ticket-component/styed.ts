import styled from "styled-components";

export const TicketContainer = styled.div`
  background: hsl(223, 10%, 50%, 0.2);
  position: relative;
  width: 100%;
  height: max-content;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-top: 10px;
`;

export const TicketIdentification = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  text-align: center;
`;

export const TicketBetType = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  text-align: center;
`;

export const DeleteSelection = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  place-self: right;
  background: hsl(223, 10%, 50%, 0.2);
  border: none;
  flex: 1;
  &:active {
    transform: scale(0.9);
  }
`;

export const TicketBetTypeItem = styled.span<{ isType?: boolean }>`
  font-size: 14px;
  text-align: center;
  background: ${({ theme, isType }) =>
    isType ? theme.success : "transparent"};
  width: 50%;
  color: ${({ theme, isType }) => (isType ? "black" : theme.color)};
  font-weight: bold;
  &:nth-child(2) {
    border-bottom-left-radius: 8px;
  }
  &:nth-child(1) {
    border-bottom-right-radius: 8px;
  }
`;

export const TicketDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
  min-height: 300px;
  gap: 8px;
  height: 300px;
`;

export const TicketEvent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
`;

export const TicketEventSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.color};
  &:nth-child(2) {
    align-items: flex-end;
    gap: 2px;
  }
`;

export const Divider = styled.hr`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
`;
