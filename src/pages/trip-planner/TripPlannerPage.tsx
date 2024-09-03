import { useState } from "react";

import { AppLayout, FullScreenLoader } from "../../common-components";
import { ITrip } from "../../types";
import { TripPlanPreview, TripPlannerForm } from "./components";
import { getTripItinerary } from "../../services";
import { DEFAULT_TRIP_DATA_VALUE } from "../../consts";
import { useToast } from "../../hooks";

export const TripPlannerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState<ITrip>(DEFAULT_TRIP_DATA_VALUE);
  const [showPreviewPage, setShowPreviewPage] = useState(false);

  const toast = useToast();

  const onResetDataClick = () => {
    setTripPlan(DEFAULT_TRIP_DATA_VALUE);
  };

  const onChangeTripValue = (key: string, value: string) => {
    setTripPlan({ ...tripPlan, [key]: value });
  };

  const onGetTripItinerary = async () => {
    try {
      setIsLoading(true);
      const { itinerary } = await getTripItinerary(tripPlan);
      setTripPlan({
        ...tripPlan,
        itinerary,
      });
      setShowPreviewPage(true);
    } catch {
      toast("Error generating a trip plan.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout pageTitle="Trip planner">
      {isLoading && (
        <FullScreenLoader text="Generating your trip itinerary. Please don't close this page." />
      )}
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {showPreviewPage ? (
          <TripPlanPreview
            setShowPreviewPage={setShowPreviewPage}
            onChangeTripValue={onChangeTripValue}
            tripPlan={tripPlan}
          />
        ) : (
          <TripPlannerForm
            tripPlan={tripPlan}
            onResetClick={onResetDataClick}
            onChangeTripValue={onChangeTripValue}
            onGetTripItinerary={onGetTripItinerary}
          />
        )}
      </div>
    </AppLayout>
  );
};
