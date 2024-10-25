export interface Option {
  label: string;
  value: string;
}

export interface Field {
  element: string;
  type: string;
  placeholder?: string;
  options?: Option[];
}

export interface Question {
  id: number;
  title: string;
  fields: Field[];
}
