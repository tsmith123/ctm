import "./styles.css";

type Props = {
  name: string;
  value: string;
  onChange(name: string, value: string): void;
};

export default function Date({ name, value, onChange }: Props) {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={(e) => onChange(e.currentTarget.name, e.currentTarget.value)}
      className="input"
    />
  );
}
