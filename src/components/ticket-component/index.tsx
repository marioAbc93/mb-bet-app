import { useSelector, useDispatch } from "react-redux";
import { eventSelector } from "../../models/redux/events";
import { eventSelectionSelector } from "../../models/redux/selection";
import {
  removeItemFromSelection,
  clearAllSelection,
} from "../../models/redux/selection";
import { useNotification } from "../../models/context/useNotification";
import { useTicket } from "../../models/context/useTicket";
import useCompareSelections from "../../hooks/useBetValidator";
import CurrencyInput from "react-currency-input-field";
import {
  TicketContainer,
  TicketIdentification,
  TicketEvent,
  TicketDetail,
  TicketEventSection,
  Divider,
  TicketBetType,
  TicketBetTypeItem,
  DeleteSelection,
  Row,
} from "./styed";
import { QrCode, ExitIcon } from "../../assets/icons";
import Button from "../custom-button";
export default function Ticket() {
  const { getError, getSuccess } = useNotification();
  const data = useSelector(eventSelectionSelector);
  const dispatch = useDispatch();
  const amout = 1000;

  const deleteItem = (id: string) => {
    dispatch(removeItemFromSelection(id));
  };

  const deleteAll = () => {
    dispatch(clearAllSelection());
  };

  const events = useSelector(eventSelector);
  const noDuplicates = useCompareSelections(events, data);
  const { setOpenTicket } = useTicket();
  const handleBet = () => {
    if (noDuplicates) {
      setOpenTicket(false);
      deleteAll();
      getSuccess("Bet made successfully, Iridian :)");
    } else {
      setOpenTicket(false);
      getError(
        "The bet cannot be placed, there are selections from the same market"
      );
    }
  };

  const isSingle = data.totalEvents === 1;

  return (
    <TicketContainer>
      <TicketIdentification>
        <p>Ticket</p>
      </TicketIdentification>
      <TicketBetType>
        <TicketBetTypeItem isType={isSingle}>Simple</TicketBetTypeItem>
        <TicketBetTypeItem isType={!isSingle}>Combined</TicketBetTypeItem>
      </TicketBetType>
      <TicketDetail>
        {data.events.map((event, index) => (
          <>
            <TicketEvent key={event.id}>
              <TicketEventSection>
                <span>{event.name}</span>
                <span>{event.price}</span>
              </TicketEventSection>
              <TicketEventSection>
                <DeleteSelection onClick={() => deleteItem(event.id)}>
                  {ExitIcon}
                </DeleteSelection>
              </TicketEventSection>
            </TicketEvent>
            {index !== data.totalEvents - 1 && <Divider />}
          </>
        ))}
      </TicketDetail>
      <Divider />
      <Row>
        <Row>
          <CurrencyInput
            defaultValue={amout}
            decimalsLimit={0}
            prefix="$"
            groupSeparator="."
            decimalSeparator=","
            style={{
              padding: "5px 10px",
              borderRadius: 5,
              border: "none",
            }}
          />
        </Row>
      </Row>
      <Row>
        {QrCode}
        <Row>
          <Button
            description="Delete All"
            color="secondary"
            onClick={deleteAll}
          />
          <Button description="Bet" color="primary" onClick={handleBet} />
        </Row>
      </Row>
    </TicketContainer>
  );
}
