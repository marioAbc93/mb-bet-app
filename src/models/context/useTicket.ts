import { useContext } from "react";

import TicketContext from "./ticketContext";

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) throw new Error("No existe el contexto");
  return context;
};
