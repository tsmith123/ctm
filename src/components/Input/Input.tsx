import "./styles.css";

type Props = {
  name: string;
  value: string;
  onChange(name: string, value: string): void;
  type?: string;
  placeholder?: string;
};

export default function Input({
  name,
  value,
  onChange,
  type,
  placeholder,
}: Props) {
  return (
    <input
      name={name}
      aria-label={name}
      value={value}
      onChange={(e) => onChange(e.currentTarget.name, e.currentTarget.value)}
      type={type || "text"}
      placeholder={placeholder}
      className="input"
    />
  );
}
