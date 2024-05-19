import { useSelector } from "react-redux";
import { totalEventsSelectedSelector } from "../../models/redux/selection";
import { useTicket } from "../../models/context/useTicket";
import Ticket from "../ticket-component";
import { ExitIcon, SadIcon } from "../../assets/icons";
import { HiddenMenu, ButtonComponent, SadIconContainer } from "./styled";

interface ContainerProps {
  show: boolean;
}
export default function BetContainer({ show }: ContainerProps) {
  const events = useSelector(totalEventsSelectedSelector);
  const { setOpenTicket } = useTicket();
  return (
    <>
      <HiddenMenu show={show} data-testid="hidden-menu">
        <ButtonComponent onClick={() => setOpenTicket(false)}>
          {ExitIcon}
        </ButtonComponent>
        {events > 0 ? (
          <Ticket />
        ) : (
          <SadIconContainer data-testid="sad-icon">
            {SadIcon}
            <span>
              Oops, there are no events selected at the moment, select one to
              place a bet.
            </span>
          </SadIconContainer>
        )}
      </HiddenMenu>
    </>
  );
}
