import { FormEvent, useState } from "react";
import { PrimaryButton, TextInput } from "../../../common-components";
import { Link } from "react-router-dom";

interface Props {
  isRegisterFormDisabled: boolean;
  onRegisterUser: (email: string, username: string, password: string) => void;
}

export const RegisterForm = ({
  isRegisterFormDisabled,
  onRegisterUser,
}: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegisterFormDisabled) return;

    onRegisterUser(email, username, password);
  };

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <TextInput
              disabled={isRegisterFormDisabled}
              id="email"
              label="Email address"
              required
              type="email"
              value={email}
              onChange={setEmail}
            />
          </div>

          <div>
            <TextInput
              disabled={isRegisterFormDisabled}
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
              disabled={isRegisterFormDisabled}
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
              Already have an account?{" "}
              <Link
                to="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Log in here
              </Link>
            </p>
            <PrimaryButton
              isDisabled={isRegisterFormDisabled}
              type="submit"
              text="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
