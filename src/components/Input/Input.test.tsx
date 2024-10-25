import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Input from "./Input";

const onChangeSpy = jest.fn();

describe("components/Input", () => {
  describe("When user types into input", () => {
    it("should call the onChange handler", async () => {
      render(<Input name="test" value="" onChange={onChangeSpy} />);

      const input = screen.getByLabelText("test");

      const textToType = "x";

      await userEvent.type(input, textToType);
      expect(onChangeSpy).toHaveBeenCalledWith("test", textToType);
    });
  });
});
