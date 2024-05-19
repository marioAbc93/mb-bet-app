import { useDispatch, useSelector } from "react-redux";
import {
  EventType,
  MarketType,
  SelectionType,
} from "../../models/entities/event";
import Button from "../custom-button";
import { EventContainerDiv, MarketContainerDiv } from "./styled";
import {
  addEvent,
  eventSelectionSelector,
  removeItemFromSelection,
} from "../../models/redux/selection";

interface EventContainerProps {
  event: EventType;
}

export default function EventContainer({ event }: EventContainerProps) {
  const dispatch = useDispatch();
  const selections = useSelector(eventSelectionSelector);
  const handleSelect = (item: SelectionType) => {
    dispatch(addEvent(item));
  };
  const deleteItem = (id: string) => {
    dispatch(removeItemFromSelection(id));
  };

  return (
    <EventContainerDiv>
      <h4>{event.name}</h4>
      {event.markets.map((market: MarketType) => (
        <div key={market.id}>
          <h5>{market.name}</h5>
          <MarketContainerDiv>
            {market.selections.map((selection: SelectionType) => (
              <Button
                orientation="column"
                key={selection.id}
                color={
                  selections.events.some((item) => item.id === selection.id)
                    ? "secondary"
                    : "primary"
                }
                onClick={
                  selections.events.some((item) => item.id === selection.id)
                    ? () => deleteItem(selection.id)
                    : () => handleSelect(selection)
                }
                description={selection.name}
                value={selection.price}
                isBet={true}
              />
            ))}
          </MarketContainerDiv>
        </div>
      ))}
    </EventContainerDiv>
  );
}
