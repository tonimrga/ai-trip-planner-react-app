import { ItineraryResponse, ITrip } from "../types";

const url = `${import.meta.env.VITE_API_URL}/trips`;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getAllUserTrips = async (searchTerm: string): Promise<ITrip[]> => {
  const response = await fetch(`${url}?search=${searchTerm}`, {
    credentials: "include",
  });

  const trips = await response.json();
  return trips;
};

export const getTripItinerary = async (
  trip: ITrip
): Promise<ItineraryResponse> => {
  const response = await fetch(`${url}/plan`, {
    method: "POST",
    body: JSON.stringify(trip),
    headers: headers,
    credentials: "include",
  });

  const itinerary = await response.json();
  return itinerary;
};

export const saveTrip = async (trip: ITrip): Promise<ITrip> => {
  const response = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(trip),
    headers: headers,
    credentials: "include",
  });

  const savedTrip = await response.json();
  return savedTrip;
};

export const getTripsDetails = async (id: string): Promise<ITrip> => {
  const response = await fetch(`${url}/${id}`, {
    credentials: "include",
  });

  const trip = await response.json();
  return trip;
};

export const updateTrip = async (
  id: string,
  trip: Partial<ITrip>
): Promise<ITrip> => {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(trip),
    headers: headers,
    credentials: "include",
  });

  const updatedTrip = await response.json();
  return updatedTrip;
};

export const deleteTrip = async (id: string): Promise<ITrip> => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: headers,
    credentials: "include",
  });

  const deletedTrip = await response.json();
  return deletedTrip;
};
