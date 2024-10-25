import data from "./data/api.json";
import { Question } from "./types";

function App() {
  const questions: Question[] = data.questions;

  return (
    <div className="app">
      <h1>UI Tech Test</h1>
      {questions.map((question: Question) => {
        return (
          <div key={question.id}>
            <h2>{question.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
