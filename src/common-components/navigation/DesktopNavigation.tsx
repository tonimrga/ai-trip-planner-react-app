import {
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { INavigationItem, IUserNavigationItem } from "../../types";
import { classNames } from "../../utils";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../hooks";

interface Props {
  navigation: INavigationItem[];
  userNavigation: IUserNavigationItem[];
}

export const DesktopNavigation = ({ navigation, userNavigation }: Props) => {
  const { user } = useUserContext();
  const location = useLocation();

  return (
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
                      ? "text-white border-b-2 border-b-white"
                      : "",
                    "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
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
              <div className="text-sm font-medium leading-none text-right text-gray-300">
                {user?.email}
              </div>
            </div>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-8 w-8 flex-shrink-0 text-indigo-600"
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
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-indigo-700 p-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
  );
};
