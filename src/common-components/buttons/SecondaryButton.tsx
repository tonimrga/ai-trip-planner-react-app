interface Props {
  text: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export const SecondaryButton = ({ text, isDisabled, type, onClick }: Props) => (
  <button
    disabled={isDisabled}
    type={type}
    onClick={onClick}
    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
  >
    {text}
  </button>
);
