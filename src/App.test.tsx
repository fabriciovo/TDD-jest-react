import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

const mockUser = jest.fn();

describe("App", () => {
 


  //checar input username
  it("Should render input element", () => {
    const component = render(<App />);
    const inpuElement = component.getByPlaceholderText(/Username.../i);
    expect(inpuElement).toBeInTheDocument();
  });

  it("Should be able to type in input", () => {
    const component = render(<App />);
    const inpuElement = component.getByPlaceholderText(/Username.../i) as HTMLInputElement;
    const buttonElement = component.getByRole("button", {name:"Send"});
    fireEvent.change(inpuElement, { target: { value: "Teste" } });
    fireEvent.click(buttonElement);
    expect(inpuElement.value).toBe("");
  });

});
