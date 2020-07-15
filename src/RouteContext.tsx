import React, { createContext } from "react";
const DefaultContext: {
  currentUrl: string;
  setCurrentUrl: React.Dispatch<string> | null;
} = { currentUrl: "/", setCurrentUrl: null };

export const RouteContext = createContext(DefaultContext);
