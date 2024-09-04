import { InputLabel } from "./InputLabel";

interface Props {
  label: string;
  id: string;
  value?: string[];
  onChange: (value: string[]) => void;
}

export const Checkbox = ({ label, id, value = [], onChange }: Props) => {
  const isItemChecked = (): boolean => {
    return value.includes(id);
  };

  const onChangeValue = () => {
    if (isItemChecked()) {
      const newValue = value.filter((item) => item !== id);
      onChange(newValue);
      return;
    }

    onChange([...value, id]);
  };
  return (
    <div className="flex items-center gap-x-3">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        onChange={onChangeValue}
        checked={isItemChecked()}
      />
      <InputLabel label={label} id={id} />
    </div>
  );
};
