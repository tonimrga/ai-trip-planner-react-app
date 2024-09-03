import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../hooks";

export const UserAuthLayout = () => {
  const { user } = useUserContext();
  const isUserLoggedIn = user !== undefined && user.role === "user";
  const isAdminLoggedIn = user !== undefined && user.role === "admin";

  if (isUserLoggedIn || isAdminLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};
