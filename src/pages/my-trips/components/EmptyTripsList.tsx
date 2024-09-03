import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../common-components";

export const EmptyTripsList = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col pt-32">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        No trips found.
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Start by creating some travel plans and saving them to your trips.
      </p>
      <Link to="/trips/plan" className="mt-4">
        <PrimaryButton text="Create a trip plan" />
      </Link>
    </div>
  );
};
