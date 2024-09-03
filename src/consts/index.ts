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
