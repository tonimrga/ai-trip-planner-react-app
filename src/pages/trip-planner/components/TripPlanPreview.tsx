import { useState } from "react";

import { ITrip } from "../../../types";
import { saveTrip } from "../../../services";
import {
  PrimaryButton,
  TextButton,
  TripDetails,
} from "../../../common-components";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../hooks";

interface Props {
  onChangeTripValue: (key: string, value: string) => void;
  setShowPreviewPage: (showPreviewPage: boolean) => void;
  tripPlan: ITrip;
}

export const TripPlanPreview = ({
  tripPlan,
  setShowPreviewPage,
  onChangeTripValue,
}: Props) => {
  const [isSavingInProgress, setIsSavingInProgress] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const onGoBackClick = () => {
    setShowPreviewPage(false);
  };

  const onSaveTrip = async () => {
    if (tripPlan === undefined) return;

    try {
      setIsSavingInProgress(true);
      await saveTrip(tripPlan);
      toast("Saved to your trips.", "success");
      navigate("/trips");
    } catch {
      toast("Error saving the trip.", "error");
    } finally {
      setIsSavingInProgress(false);
    }
  };

  return (
    <div>
      <TripDetails trip={tripPlan} onChangeTripValue={onChangeTripValue} />
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <TextButton onClick={onGoBackClick} text="Go back" />
        <PrimaryButton
          isDisabled={isSavingInProgress || tripPlan.title === ""}
          onClick={onSaveTrip}
          text={"Save"}
        />
      </div>
    </div>
  );
};
