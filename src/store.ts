import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Market } from "./types";

export const markets = writable({
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
});

const { set, update } = markets;

export const addMarket = (location: string) => {
  update((prev) => {
    ++prev.lastMarketId;
    ++prev.totalMarkets;

    const newMarket: Market = {
      marketId: prev.lastMarketId,
      location: location,
      cards: 0,
      percentOfTotal: 0,
    };

    // push the new market onto a copy of the market list
    const marketList = prev.marketList.slice();
    marketList.push(newMarket);

    return {
      ...prev,
      marketList,
      newLocation: "",
    };
  });
};
export const addCard = (marketId: number) => {
  //   console.log(marketId);
  update((prev) => {
    const totalCards = ++prev.totalCards;
    const marketList = prev.marketList.slice();

    ++marketList[marketId].cards;
    for (let i = 0; i < marketList.length; i++) {
      marketList[i].percentOfTotal = Math.round(
        (marketList[i].cards / totalCards) * 100
      );
    }

    return { ...prev, marketList, totalCards };
  });
};
export const deleteCard = (marketId: number) => {
  update((prev) => {
    let totalCards = prev.totalCards;
    const marketList = prev.marketList.slice();

    if (marketList[marketId].cards > 0) {
      --totalCards;
      --marketList[marketId].cards;
      for (let i = 0; i < marketList.length; i++) {
        marketList[i].percentOfTotal = Math.round(
          (marketList[i].cards / totalCards) * 100
        );
      }
    }
    return { ...prev, marketList, totalCards };
  });
};

export const reset = () =>
  set({
    totalMarkets: 0,
    totalCards: 0,
    marketList: [],
    lastMarketId: 10000,
    newLocation: "",
  });
