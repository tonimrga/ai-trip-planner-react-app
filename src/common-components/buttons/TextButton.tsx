interface Props {
  text: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}

export const TextButton = ({ text, isDisabled, type, onClick }: Props) => (
  <button
    type={type}
    className="text-sm font-semibold leading-6 text-gray-900"
    onClick={onClick}
    disabled={isDisabled}
  >
    {text}
  </button>
);
