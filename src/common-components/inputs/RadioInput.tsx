import { InputLabel } from "./InputLabel";

interface Props {
  label: string;
  id: string;
  value?: string;
  onChange: (value: string) => void;
}

export const RadioInput = ({ label, id, value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        id={id}
        name={id}
        type="radio"
        className="h-4 w-4 mt-0.5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        onChange={() => onChange(id)}
        checked={value === id}
      />
      <InputLabel label={label} id={id} />
    </div>
  );
};
