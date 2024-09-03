import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { IUser } from "../types";
import { getLoggedInUserData } from "../services";

interface IUserContext {
  user?: IUser;
  setUser: (user?: IUser) => void;
}

const UserContext = createContext<IUserContext>({ setUser: () => {} });

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setIsUserLoading(true);
        const user = await getLoggedInUserData();
        setUser(user);
      } catch {
        return;
      } finally {
        setIsUserLoading(false);
      }
    };

    getUserData();
  }, []);

  if (isUserLoading) return null;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
