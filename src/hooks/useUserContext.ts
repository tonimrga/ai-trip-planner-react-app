import { useContext } from "react";

import { UserContext } from "../context";

export const useUserContext = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};
