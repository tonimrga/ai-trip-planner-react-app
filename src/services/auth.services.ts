import { IUser } from "../types";

const url = `${import.meta.env.VITE_API_URL}/auth`;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const loginUser = async (
  username: string,
  password: string
): Promise<IUser | undefined> => {
  const response = await fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: headers,
    credentials: "include",
  });

  const user = await response.json();
  return user;
};

export const registerUser = async (
  email: string,
  username: string,
  password: string
): Promise<IUser | undefined> => {
  const response = await fetch(`${url}/register`, {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
    headers: headers,
    credentials: "include",
  });

  const user = await response.json();
  return user;
};

export const logoutUser = async () => {
  await fetch(`${url}/logout`, {
    method: "POST",
    credentials: "include",
  });
};

export const getLoggedInUserData = async (): Promise<IUser | undefined> => {
  const response = await fetch(`${url}/user`, {
    credentials: "include",
  });

  const user = await response.json();
  return user;
};
