import { Option } from "../../types";
import "./styles.css";

type Props = {
  name: string;
  value: string;
  options: Option[];
  onChange(name: string, value: string): void;
  placeholder?: string;
};

export default function Select({
  name,
  value,
  options,
  onChange,
  placeholder,
}: Props) {
  return (
    <select
      name={name}
      aria-label={name}
      value={value}
      onChange={(e) => onChange(e.currentTarget.name, e.currentTarget.value)}
      className="select"
    >
      <>
        {placeholder && <option>{placeholder}</option>}
        {options.map((option: Option, idx: number) => {
          return (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </>
    </select>
  );
}
