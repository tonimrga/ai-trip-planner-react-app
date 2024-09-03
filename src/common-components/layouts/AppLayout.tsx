import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PropsWithChildren } from "react";

import { INavigationItem, IUserNavigationItem } from "../../types";
import { classNames } from "../../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast, useUserContext } from "../../hooks";
import { logoutUser } from "../../services";

interface Props {
  pageTitle: string;
}

export const AppLayout = ({
  pageTitle,
  children,
}: PropsWithChildren<Props>) => {
  const { user, setUser } = useUserContext();
  const location = useLocation();
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
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.href === location.pathname}
                      className={classNames(
                        item.href === location.pathname
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div>
                  <div className="text-sm font-medium leading-none text-right text-white">
                    {user?.username}
                  </div>
                  <div className="text-sm font-medium leading-none text-right text-gray-400">
                    {user?.email}
                  </div>
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon
                        aria-hidden="true"
                        className="h-8 w-8 flex-shrink-0 text-white"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          onClick={item.onClick ? item.onClick : undefined}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                aria-current={item.href === location.pathname}
                className={classNames(
                  item.href === location.pathname
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                <Link to={item.href}>{item.name}</Link>
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <UserCircleIcon
                  aria-hidden="true"
                  className="h-8 w-8 flex-shrink-0 text-white"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {user?.username}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  {user?.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={item.onClick}
                >
                  <Link
                    onClick={item.onClick ? item.onClick : undefined}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {pageTitle}
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
