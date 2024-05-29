import { useState } from "react";
import { useSelector } from "react-redux";
import {
  EventType,
  MarketType,
  SelectionType,
} from "../../models/entities/event";
import Button from "../custom-button";
import { EventContainerDiv, MarketContainerDiv } from "./styled";
import { eventSelectionSelector } from "../../models/redux/selection";
import Modal from "../modal";

interface EventContainerProps {
  event: EventType;
}

export default function EventContainer({ event }: EventContainerProps) {
  const selections = useSelector(eventSelectionSelector);
  const [open, setOpen] = useState<boolean>(false);
  const [activeSelection, setActiveSelection] = useState<SelectionType>();
  const [name, setName] = useState<string | null>();
  const [price, setPrice] = useState<number | null>();
  const handleSelect = (item: SelectionType) => {
    setOpen(true);
    setName(item.name);
    setPrice(item.price);
    setActiveSelection(item);
  };

  return (
    <EventContainerDiv>
      <h4>{event.name}</h4>
      {event.markets.map((market: MarketType) => (
        <div key={market.id}>
          <h5>{market.name}</h5>
          <MarketContainerDiv>
            {market.selections.map((selection: SelectionType) => (
              <>
                <Button
                  orientation="column"
                  key={selection.id}
                  color={
                    selections.events.some((item) => item.id === selection.id)
                      ? "success"
                      : "primary"
                  }
                  onClick={() => handleSelect(selection)}
                  description={selection.name}
                  value={selection.price}
                  isBet={true}
                />
              </>
            ))}
          </MarketContainerDiv>
        </div>
      ))}
      {name && price && activeSelection ? (
        <Modal
          name={name}
          price={price}
          open={open}
          setOpen={setOpen}
          selection={activeSelection}
        />
      ) : null}
    </EventContainerDiv>
  );
}
