import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface Clicks {
  clicks: number;
  setClicks: Dispatch<SetStateAction<number>>;
}

interface ContextProps {
  children: ReactNode;
}

export const ClickContext = createContext<Clicks>({
  clicks: 0,
  setClicks: () => {},
});

export const ClickProvider = ({ children }: ContextProps) => {
  const [clicks, setClicks] = useState(0);
  return (
    <ClickContext.Provider value={{ clicks, setClicks }}>
      {children}
    </ClickContext.Provider>
  );
};
