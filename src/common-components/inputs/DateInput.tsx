import { InputLabel } from "./InputLabel";

interface Props {
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const DateInput = ({
  label,
  id,
  required,
  value,
  min,
  max,
  disabled,
  onChange,
}: Props) => (
  <>
    <InputLabel label={label} id={id} />
    <div className="mt-1">
      <input
        disabled={disabled}
        id={id}
        name={id}
        type="date"
        autoComplete={id}
        value={value}
        min={min}
        max={max}
        required={required}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </>
);
