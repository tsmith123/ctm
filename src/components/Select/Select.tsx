import { Option } from "../../types";
import "./styles.css";

type Props = {
  name: string;
  value: string;
  options: Option[];
  onChange(name: string, value: string): void;
};

export default function Select({ name, value, options, onChange }: Props) {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.currentTarget.name, e.currentTarget.value)}
      className="select"
    >
      {options.map((option: Option, idx: number) => {
        return (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
