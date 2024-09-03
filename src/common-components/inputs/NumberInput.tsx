import { InputLabel } from "./InputLabel";

interface Props {
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  min?: number;
  max?: number;
  onChange: (value: string) => void;
}

export const NumberInput = ({
  label,
  id,
  required,
  value,
  min,
  max,
  onChange,
}: Props) => {
  return (
    <>
      <InputLabel label={label} id={id} />
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type="number"
          required={required}
          autoComplete={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
