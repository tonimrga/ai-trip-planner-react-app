import { FormEvent, useCallback, useEffect, useState } from "react";

import {
  AppLayout,
  IconButton,
  Loader,
  PrimaryButton,
  TextInput,
} from "../../common-components";
import { ITrip } from "../../types";
import { MyTripsList } from "./components";
import { getAllUserTrips } from "../../services";
import { useToast } from "../../hooks";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const MyTripsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toast = useToast();

  const getTrips = useCallback(
    async (searchTerm = "") => {
      try {
        setIsLoading(true);
        const trips = await getAllUserTrips(searchTerm);
        setTrips(trips);
      } catch {
        toast("Error getting your trips.", "error");
      } finally {
        setIsLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    getTrips();
  }, [getTrips]);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTrips(searchTerm);
  };

  return (
    <AppLayout pageTitle="My Trips">
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="w-full flex justify-center items-center flex-col pt-32">
            {<Loader />}
          </div>
        ) : (
          <>
            <div className="w-full flex items-center justify-between mb-5">
              <form className="flex items-center" onSubmit={onSearch}>
                <TextInput
                  placeholder="Search your trips"
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={setSearchTerm}
                />
                <div className="mt-1 ml-2">
                  <IconButton
                    icon={
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-white"
                      />
                    }
                    type="submit"
                  />
                </div>
              </form>
              <Link to="/trips/plan">
                <PrimaryButton text="Add a trip" />
              </Link>
            </div>

            <MyTripsList trips={trips} getTrips={getTrips} />
          </>
        )}
      </div>
    </AppLayout>
  );
};
