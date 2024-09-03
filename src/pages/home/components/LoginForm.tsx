import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

import { PrimaryButton, TextInput } from "../../../common-components";

interface Props {
  isLoginFormDisabled: boolean;
  onLoginUser: (username: string, password: string) => void;
}

export const LoginForm = ({ isLoginFormDisabled, onLoginUser }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoginFormDisabled) return;

    onLoginUser(username, password);
  };

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <TextInput
              disabled={isLoginFormDisabled}
              id="username"
              label="Username"
              required
              type="text"
              value={username}
              onChange={setUsername}
            />
          </div>

          <div>
            <TextInput
              disabled={isLoginFormDisabled}
              id="password"
              label="Password"
              required
              type="password"
              value={password}
              onChange={setPassword}
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </Link>
            </p>
            <PrimaryButton
              isDisabled={isLoginFormDisabled}
              type="submit"
              text="Log in"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
