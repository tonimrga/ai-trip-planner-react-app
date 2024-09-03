interface Props {
  label: string;
  id: string;
}

export const InputLabel = ({ label, id }: Props) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
  );
};
