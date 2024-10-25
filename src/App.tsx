import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import { Field, Question } from "./types";

const data = require("./data/api.json");

type Values = {
  name: string;
  dob: string;
  vehicle: string;
};

const initialValues: Values = {
  name: "",
  dob: "",
  vehicle: "",
};

function App() {
  const [values, setValues] = useState<Values>(initialValues);

  const handleOnChange = (name: string, value: string) => {
    const valuesCopy: any = { ...values };

    valuesCopy[name] = value;
    setValues(valuesCopy);
  };

  const questions: Question[] = data.questions;

  return (
    <div className="app">
      <h1>UI Tech Test</h1>
      {questions.map((question: Question) => {
        return (
          <div key={question.id}>
            <h2>{question.title}</h2>
            {question.fields.map((field: Field, idx: number) => {
              const value = values[field.name as keyof Values];
              const { element, options, name, placeholder, type } = field;

              if (element === "input") {
                return (
                  <div key={idx}>
                    <Input
                      type={type}
                      name={name}
                      value={value}
                      onChange={handleOnChange}
                      placeholder={placeholder}
                    />
                  </div>
                );
              }

              return (
                <div key={idx}>
                  <Select
                    name={name}
                    value={value}
                    options={options!}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
