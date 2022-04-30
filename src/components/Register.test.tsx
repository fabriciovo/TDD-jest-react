import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Register from "./Register";
const MockRegister = () => {
    return (
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  };

describe("Register", () => {
  //checar input username
  it("Should render input element", () => {
    const component = render(<MockRegister />);
    const inpuElement = component.getByPlaceholderText(/Username.../i);
    expect(inpuElement).toBeInTheDocument();
  });

  it("Should render send button element", () => {
    const component = render(<MockRegister />);
    const buttonElement = component.getByRole("button", {name:"Send"});
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should render back button element", () => {
    const component = render(<MockRegister />);
    const buttonElement = component.getByRole("link", {name:"Back"});
    expect(buttonElement).toBeInTheDocument();
  });
  
  it("Should reset after send", () => {
    const component = render(<MockRegister />);
    const inpuElement = component.getByPlaceholderText(/Username.../i) as HTMLInputElement;
    const buttonElement = component.getByRole("button", {name:"Send"});
    fireEvent.change(inpuElement, { target: { value: "Teste" } });
    fireEvent.click(buttonElement);
    expect(inpuElement.value).toBe("");
  });

});
