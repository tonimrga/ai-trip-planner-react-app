import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { RegisterForm } from "./components";
import { registerUser } from "../../services";
import { useToast, useUserContext } from "../../hooks";

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const toast = useToast();

  const onRegisterUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      setIsLoading(true);
      const user = await registerUser(email, username, password);
      setUser(user);
      navigate("/trips/plan");
    } catch {
      toast(
        "Error registering the user. Try entering your data again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (user !== undefined) return <Navigate to={"/trips"} />;

  return (
    <RegisterForm
      onRegisterUser={onRegisterUser}
      isRegisterFormDisabled={isLoading}
    />
  );
};
