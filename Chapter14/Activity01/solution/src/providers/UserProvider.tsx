import firebase from 'firebase';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { auth } from '../services/firebase';

interface ContextProps {
  children: ReactNode;
}

export const UserContext = createContext<Partial<firebase.User | undefined>>(
  {}
);

export const UserProvider = (props: ContextProps) => {
  const [user, setUser] = useState<firebase.User>();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth ?? undefined);
    });
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
