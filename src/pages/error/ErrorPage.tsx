import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="basis-1/2 h-screen bg-indigo-800 py-20 px-12 sm:py-16 lg:py-24 flex flex-col items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Error 404
          </h1>
          <p className="mt-6 text-md leading-8 text-gray-300">
            The requestet page does not exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="text-sm font-semibold leading-6 text-white">
              Go back to home page <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="basis-1/2 h-screen flex justify-center items-center bg-gray-100 py-10 px-12 lg:py-0 lg:px-0">
        <FaceFrownIcon className="h-1/3 w-1/3" />
      </div>
    </div>
  );
};
