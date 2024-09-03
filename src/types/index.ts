export interface IUserNavigationItem {
  href: string;
  name: string;
  onClick?: () => void;
}

export interface INavigationItem {
  href: string;
  name: string;
}

export interface ITrip {
  _id?: string;
  title: string;
  itinerary?: string;
  destination: string;
  startDate: string;
  endDate: string;
  numOfTravellers?: string;
  modeOfTransport?: string;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface ItineraryResponse {
  itinerary: string;
}

export type ToastType = "success" | "error";
export type DialogType = "info" | "error";
