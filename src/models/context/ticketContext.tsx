import React, { useState, Dispatch, SetStateAction } from "react";

interface TicketContextType {
  openTicket: boolean;
  setOpenTicket: Dispatch<SetStateAction<boolean>>;
}

const TicketContext = React.createContext<TicketContextType | null>(null);

export const TicketProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [openTicket, setOpenTicket] = useState(false);

  const value: TicketContextType = { openTicket, setOpenTicket };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};

export default TicketContext;
