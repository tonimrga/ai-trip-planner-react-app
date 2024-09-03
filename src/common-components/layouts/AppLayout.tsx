import { Disclosure } from "@headlessui/react";
import { PropsWithChildren } from "react";

import { INavigationItem, IUserNavigationItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { useToast, useUserContext } from "../../hooks";
import { logoutUser } from "../../services";
import { MobileNavigation } from "../navigation/MobileNavigation";
import { DesktopNavigation } from "../navigation/DesktopNavigation";

interface Props {
  pageTitle: string;
}

export const AppLayout = ({
  pageTitle,
  children,
}: PropsWithChildren<Props>) => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const toast = useToast();

  const onLogoutUser = async () => {
    try {
      await logoutUser();
      setUser(undefined);
      navigate("/");
    } catch {
      toast("Error logging out the user.", "error");
    }
  };

  const userNavigation: IUserNavigationItem[] = [
    { name: "Log out", href: "", onClick: onLogoutUser },
  ];

  const navigation: INavigationItem[] = [
    { name: "Trip Planner", href: "/trips/plan" },
    { name: "My Trips", href: "/trips" },
  ];

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-indigo-900">
        <DesktopNavigation
          navigation={navigation}
          userNavigation={userNavigation}
        />
        <MobileNavigation
          navigation={navigation}
          userNavigation={userNavigation}
        />
      </Disclosure>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {pageTitle}
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
