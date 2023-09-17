"use client";

import { createContext, useState, type PropsWithChildren } from "react";

type Props = {
  defaultValue: string;
  onTagChange?: (value: string) => void;
};

type TabsContextValue = {
  currentValue: string;
  move: (value: string) => void;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export const Root = ({ children, defaultValue, onTagChange }: PropsWithChildren<Props>) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);

  const move = (value: string) => {
    if (currentValue === value) {
      return;
    }

    setCurrentValue(value);
    onTagChange?.(value);
  };

  const value: TabsContextValue = {
    currentValue,
    move,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
