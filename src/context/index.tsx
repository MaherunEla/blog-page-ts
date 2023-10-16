"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";
type ContextType = {
  tagformname: any;
  setTagformname: Dispatch<SetStateAction<any>>;
};

const initialState = {
  tagformname: "",
  setTagformname: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [tagformname, setTagformname] = useState("");

  return (
    <GlobalContext.Provider value={{ tagformname, setTagformname }}>
      {children}
    </GlobalContext.Provider>
  );
}
