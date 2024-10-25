import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("./data/api.json", () => ({
  questions: [
    {
      id: 132,
      title: "What is your name?",
      fields: [
        {
          element: "input",
          type: "text",
          name: "name",
          placeholder: "e.g John Smith",
        },
      ],
    },
    {
      id: 212,
      title: "What is your date of birth?",
      fields: [
        {
          element: "input",
          type: "date",
          name: "dob",
        },
      ],
    },
    {
      id: 343,
      title: "What kind of vehicle do you drive?",
      fields: [
        {
          element: "select",
          type: "dropdown",
          name: "vehicle",
          placeholder: "Select a vehicle type",
          options: [
            {
              label: "Van",
              value: "van",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Bike",
              value: "bike",
            },
          ],
        },
      ],
    },
  ],
}));

describe("When the page loads", () => {
  it("should render the title and questions", () => {
    render(<App />);

    const title = screen.getByText("UI Tech Test");
    const questions = screen.getAllByRole("heading", { level: 2 });

    expect(title).toBeInTheDocument();
    expect(questions.length).toBe(3);
  });

  it("should render form controls", () => {
    render(<App />);

    const name = screen.getByLabelText("name");
    const dob = screen.getByLabelText("dob");
    const vehicle = screen.getByLabelText("vehicle");

    expect(name).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
    expect(vehicle).toBeInTheDocument();
  });
});
