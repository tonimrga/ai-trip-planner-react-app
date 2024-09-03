interface Props {
  text: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export const PrimaryButton = ({ text, isDisabled, type, onClick }: Props) => (
  <button
    disabled={isDisabled}
    type={type}
    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    onClick={onClick}
  >
    {text}
  </button>
);
