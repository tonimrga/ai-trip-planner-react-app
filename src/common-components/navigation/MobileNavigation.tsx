import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { INavigationItem, IUserNavigationItem } from "../../types";
import { classNames } from "../../utils";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../hooks";

interface Props {
  navigation: INavigationItem[];
  userNavigation: IUserNavigationItem[];
}

export const MobileNavigation = ({ navigation, userNavigation }: Props) => {
  const { user } = useUserContext();
  const location = useLocation();

  return (
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
            <div className="text-sm font-medium leading-none text-gray-300">
              {user?.email}
            </div>
          </div>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
  );
};
