import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useUserContext, useToast } from "../../hooks";
import { loginUser } from "../../services";
import { LoginForm } from "./components";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const toast = useToast();

  const onLoginUser = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const user = await loginUser(username, password);
      setUser(user);
      navigate("/trips/plan");
    } catch {
      toast(
        "Error logging in. Try entering username and password again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (user !== undefined) return <Navigate to={"/trips"} />;

  return (
    <LoginForm isLoginFormDisabled={isLoading} onLoginUser={onLoginUser} />
  );
};
