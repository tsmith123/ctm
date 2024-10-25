import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Select from "./Select";

const onChangeSpy = jest.fn();

const mockOptions = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
];

describe("components/Select", () => {
  describe("When the component loads", () => {
    it("should render all options", () => {
      render(
        <Select
          name="test"
          value="value1"
          options={mockOptions}
          onChange={onChangeSpy}
        />
      );

      const options = screen.getAllByLabelText(/option-/, { exact: false });
      expect(options.length).toBe(mockOptions.length);
    });
  });

  describe("When user chooses an option", () => {
    it("should call the onChange handler", async () => {
      render(
        <Select
          name="test"
          value="value1"
          options={mockOptions}
          onChange={onChangeSpy}
        />
      );

      const select = screen.getByLabelText("test");

      await userEvent.selectOptions(select, "value2");
      expect(onChangeSpy).toHaveBeenCalledWith("test", "value2");
    });
  });
});
