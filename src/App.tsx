import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import data from "./data/api.json";
import { Field, Question } from "./types";

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
    // console.log(name, value);
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

              if (field.element === "input") {
                return (
                  <div key={idx}>
                    <Input
                      type={field.type}
                      name={field.name}
                      value={value}
                      placeholder={field.placeholder}
                      onChange={handleOnChange}
                    />
                  </div>
                );
              }

              if (field.element === "select") {
                return (
                  <div key={idx}>
                    <Select
                      name={field.name}
                      value={value}
                      options={field.options!}
                      onChange={handleOnChange}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
