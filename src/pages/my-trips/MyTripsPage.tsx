import { useCallback, useEffect, useState } from "react";

import { AppLayout } from "../../common-components";
import { ITrip } from "../../types";
import { MyTripsList } from "./components";
import { getAllUserTrips } from "../../services";
import { useToast } from "../../hooks";

export const MyTripsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  // TODO - add loading state
  return (
    <AppLayout pageTitle="My Trips">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {isLoading ? (
          "Loading..."
        ) : (
          <MyTripsList trips={trips} getTrips={getTrips} />
        )}
      </div>
    </AppLayout>
  );
};
