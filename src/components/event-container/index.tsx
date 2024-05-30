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
import { useModal } from "../../models/context/useModal";
interface EventContainerProps {
  event: EventType;
}

export default function EventContainer({ event }: EventContainerProps) {
  const selections = useSelector(eventSelectionSelector);
  const { handleSelect } = useModal();

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
      <Modal />
    </EventContainerDiv>
  );
}
