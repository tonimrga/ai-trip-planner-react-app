import { InputLabel } from "./InputLabel";

interface Props {
  disabled?: boolean;
  label?: string;
  id: string;
  type: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextInput = ({
  disabled,
  label,
  id,
  type,
  required,
  value,
  placeholder,
  onChange,
}: Props) => {
  return (
    <>
      {label && <InputLabel label={label} id={id} />}
      <div className="mt-1">
        <input
          disabled={disabled}
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
