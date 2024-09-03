import { useNavigate } from "react-router-dom";

import {
  ConfirmationDialog,
  PrimaryButton,
  TextButton,
} from "../../../common-components";
import { ITrip } from "../../../types";
import { formatDate } from "../../../utils";
import { useState } from "react";
import { deleteTrip } from "../../../services";
import { useToast } from "../../../hooks";
import { EmptyTripsList } from "./EmptyTripsList";

interface Props {
  trips: ITrip[];
  getTrips: () => void;
}

export const MyTripsList = ({ trips, getTrips }: Props) => {
  const [selectedTripId, setSelectedTripId] = useState<string>();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleteInProgress, setIsDeleteInProgress] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const onViewDetailsClick = (tripId?: string) => {
    if (tripId === undefined) return;
    navigate(`/trips/${tripId}`);
  };

  const onDeleteTripClick = (tripId?: string) => {
    setIsDeleteDialogOpen(true);
    if (tripId) {
      setSelectedTripId(tripId);
    }
  };

  const onCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedTripId(undefined);
  };

  const onDeleteTrip = async () => {
    if (selectedTripId === undefined) return;

    try {
      setIsDeleteInProgress(true);
      await deleteTrip(selectedTripId);
      getTrips();
      onCloseDeleteDialog();
      toast("Trip deleted.", "success");
    } catch {
      toast("Error deleting the trip.", "error");
    } finally {
      setIsDeleteInProgress(false);
    }
  };

  if (trips.length === 0) return <EmptyTripsList />;
  return (
    <>
      <div className="flex flex-wrap gap-5">
        {trips.map((trip) => (
          <div key={`trip-item-${trip._id}`} className="w-full">
            <div className="flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {trip.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Destination: {trip.destination}
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Travel dates: {formatDate(trip.startDate)} -{" "}
                  {formatDate(trip.endDate)}
                </p>
              </div>
              <div className="flex justify-end items-center gap-6">
                <TextButton
                  text="Delete"
                  onClick={() => onDeleteTripClick(trip._id)}
                />
                <PrimaryButton
                  text="View"
                  onClick={() => onViewDetailsClick(trip._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ConfirmationDialog
        type="error"
        isDisabled={isDeleteInProgress}
        open={isDeleteDialogOpen}
        title={"Delete a trip"}
        text={
          "Are you sure you want to delete your trip? All of the trip data will be permanently removed. This action cannot be undone."
        }
        confirmationBtnText={"Delete"}
        onClose={onCloseDeleteDialog}
        onConfirm={onDeleteTrip}
      />
    </>
  );
};
