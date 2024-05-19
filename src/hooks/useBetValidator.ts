/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { SelectionType } from "../models/entities/event";

const useBetValidator = (events: any[], data: any) => {
  const [hasDuplicates, setHasDuplicates] = useState(false);

  useEffect(() => {
    const matches: {
      eventId: string;
      marketId: string;
      selectionId: string;
      selectionName: string;
    }[] = [];

    events.forEach((event) => {
      event.markets.forEach(
        (market: { selections: SelectionType[]; id: any }) => {
          market.selections.forEach((selection: SelectionType) => {
            if (
              data.events.some(
                (item: SelectionType) => item.id === selection.id
              )
            ) {
              matches.push({
                eventId: event.id,
                marketId: market.id,
                selectionId: selection.id,
                selectionName: selection.name,
              });
            }
          });
        }
      );
    });

    const duplicates = matches.some((match, index) =>
      matches
        .slice(index + 1)
        .some(
          (item) =>
            item.eventId === match.eventId && item.marketId === match.marketId
        )
    );

    setHasDuplicates(duplicates);
  }, [events, data]);

  return !hasDuplicates;
};

export default useBetValidator;
