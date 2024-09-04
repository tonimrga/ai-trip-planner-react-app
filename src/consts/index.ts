import { ITrip } from "../types";
import { getCurrentDate } from "../utils";

export const DEFAULT_TRIP_DATA_VALUE: ITrip = {
  destination: "",
  startDate: getCurrentDate(),
  endDate: getCurrentDate(),
  numOfTravellers: "1",
  title: "My Trip",
};

export const TOAST_DURATION = 5000;

export const MODE_OF_TRANSPORT_OPTIONS = [
  {
    label: "Aeroplane",
    id: "aeroplane",
  },
  {
    label: "Car/Motorbike",
    id: "car",
  },
  {
    label: "Train",
    id: "train",
  },
  {
    label: "Bus",
    id: "bus",
  },
  {
    label: "Bicycle",
    id: "bicycle",
  },
];

export const INTERESTS_OPTIONS = [
  {
    label: "Culture",
    id: "culture",
  },
  {
    label: "Food",
    id: "food",
  },
  {
    label: "Sports",
    id: "sports",
  },
  {
    label: "Museums",
    id: "museums",
  },
  {
    label: "History",
    id: "history",
  },
];
