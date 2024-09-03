interface Props {
  text: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export const DangerButton = ({ text, isDisabled, type, onClick }: Props) => (
  <button
    disabled={isDisabled}
    type={type}
    onClick={onClick}
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
  >
    {text}
  </button>
);
