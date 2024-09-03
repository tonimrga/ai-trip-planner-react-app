import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  AppLayout,
  Loader,
  PrimaryButton,
  TextButton,
  TripDetails,
} from "../../common-components";
import { ITrip } from "../../types";
import { getTripsDetails, updateTrip } from "../../services";
import { useToast } from "../../hooks";

export const TripDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trip, setTrip] = useState<ITrip>();
  const [isSavingInProgress, setIsSavingInProgress] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const onChangeTripValue = (key: string, value: string) => {
    if (trip === undefined) return;
    setTrip({ ...trip, [key]: value });
  };

  useEffect(() => {
    const getTrip = async () => {
      if (id === undefined) return;

      try {
        setIsLoading(true);
        const trip = await getTripsDetails(id);
        setTrip(trip);
      } catch {
        toast("Error getting the trip details.", "error");
      } finally {
        setIsLoading(false);
      }
    };

    getTrip();
  }, [id, toast]);

  const onGoBackClick = () => {
    navigate("/trips");
  };

  const onSaveTrip = async () => {
    if (trip === undefined || id === undefined) return;

    try {
      setIsSavingInProgress(true);
      await updateTrip(id, trip);
      navigate("/trips");
    } catch {
      toast("Error saving the trip.", "error");
    } finally {
      setIsSavingInProgress(false);
    }
  };

  return (
    <AppLayout pageTitle={trip?.title ?? ""}>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="w-full flex justify-center items-center flex-col pt-32">
            {<Loader />}
          </div>
        ) : (
          <>
            <TripDetails trip={trip} onChangeTripValue={onChangeTripValue} />
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <TextButton onClick={onGoBackClick} text="Go back" />
              <PrimaryButton
                isDisabled={isSavingInProgress}
                onClick={onSaveTrip}
                text={"Save"}
              />
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
};
