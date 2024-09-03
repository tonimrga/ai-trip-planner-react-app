import { Link, Outlet } from "react-router-dom";

export const LoginLayout = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="basis-1/2 h-screen bg-indigo-800 py-20 px-12 sm:py-16 lg:py-24 flex flex-col items-center justify-center ">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300 hover:ring-white">
            Start Your Adventure Today!{" "}
            <Link to="/register" className="font-bold text-white">
              <span aria-hidden="true" className="absolute inset-0" />
              Register <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Your Ultimate Travel Companion, Powered by AI
          </h1>
          <p className="mt-6 text-md leading-8 text-gray-300">
            Whether you're seeking a quick weekend getaway or a month-long
            expedition, our AI trip planner personalizes every detail—just for
            you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="text-sm font-semibold leading-6 text-white"
            >
              Get started <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="basis-1/2 h-screen flex justify-center items-center bg-gray-100 py-10 px-12 lg:py-0 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
};
