import { useSelector } from "react-redux";
import { totalEventsSelectedSelector } from "../../models/redux/selection";
import { useTicket } from "../../models/context/useTicket";
import BadgeComponent from "../badge";
import { Ticket } from "../../assets/icons";

import { TicketButtonComponent, ButtonContainer } from "./styled";

export default function TicketButton() {
  const events = useSelector(totalEventsSelectedSelector);
  const { setOpenTicket, openTicket } = useTicket();
  const handleShow = () => {
    setOpenTicket(!openTicket);
  };

  return (
    <ButtonContainer>
      <TicketButtonComponent onClick={handleShow}>
        {Ticket}
      </TicketButtonComponent>
      {events >= 1 && <BadgeComponent number={events} />}
    </ButtonContainer>
  );
}
