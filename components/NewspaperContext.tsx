"use client";

import { createContext, useContext } from "react";

type NewspaperNav = { goNext: () => void; goPrev: () => void };

export const NewspaperContext = createContext<NewspaperNav>({
  goNext: () => {},
  goPrev: () => {},
});

export const useNewspaperNav = () => useContext(NewspaperContext);
