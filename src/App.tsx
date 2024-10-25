import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import * as data from "./data/api.json";
import { Field, Question, Values } from "./types";

const initialValues: Values = {
  name: "",
  dob: "",
  vehicle: "",
};

function App() {
  const [values, setValues] = useState<Values>(initialValues);

  const handleOnChange = (name: string, value: string) => {
    const valuesCopy: Values = { ...values };

    valuesCopy[name as keyof Values] = value;
    setValues(valuesCopy);
  };

  const questions: Question[] = data.questions;

  return (
    <div className="app">
      <h1>UI Tech Test</h1>
      {questions.map((question: Question) => {
        return (
          <div key={question.id}>
            <h2 className="app-label">{question.title}</h2>
            {question.fields.map((field: Field, idx: number) => {
              const value = values[field.name as keyof Values];
              const { element, options, name, placeholder, type } = field;

              if (element === "input") {
                return (
                  <Input
                    key={`${question.id}-idx`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                  />
                );
              }

              return (
                <Select
                  key={idx}
                  name={name}
                  value={value}
                  options={options!}
                  onChange={handleOnChange}
                  placeholder={placeholder}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
