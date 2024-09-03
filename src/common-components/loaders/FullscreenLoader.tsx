import { Loader } from "./Loader";

interface Props {
  text: string;
}

export const FullScreenLoader = ({ text }: Props) => (
  <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
    <div className="flex flex-col justify-center items-center mt-[45vh]">
      <Loader />
      <h2 className="text-base font-semibold leading-7 text-gray-900 mt-2">
        {text}
      </h2>
    </div>
  </div>
);
