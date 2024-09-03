import { useCallback, useEffect, useState } from "react";

import { AppLayout, Loader, PrimaryButton } from "../../common-components";
import { ITrip } from "../../types";
import { MyTripsList } from "./components";
import { getAllUserTrips } from "../../services";
import { useToast } from "../../hooks";
import { Link } from "react-router-dom";

export const MyTripsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<ITrip[]>([]);

  const toast = useToast();

  const getTrips = useCallback(async () => {
    try {
      setIsLoading(true);
      const trips = await getAllUserTrips();
      setTrips(trips);
    } catch {
      toast("Error getting your trips.", "error");
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    getTrips();
  }, [getTrips]);

  return (
    <AppLayout pageTitle="My Trips">
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="w-full flex justify-center items-center flex-col pt-32">
            {<Loader />}
          </div>
        ) : (
          <>
            <div className="w-full flex justify-end mb-5">
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
