import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("App", () => {
  //checar input username

  it("Should render title", () => {
    const { getByText } = render(<MockApp />);
    expect(getByText("Hello World!")).toBeTruthy();
  });

  it("Should render Create Account Link", () => {
    render(<MockApp />);
    const link = screen.getByRole("link", { name: /Create Account/i });
    expect(link.getAttribute("href")).toBe("/Register");
  });

  it("Should render Create Account Page", async () => {
    render(<MockApp />);
    const linkButton = screen.getByText(/Create Account/);
    fireEvent.click(linkButton, { button: 0 });
    expect(screen.getByText("Create Account")).toBeInTheDocument();
  });
});
