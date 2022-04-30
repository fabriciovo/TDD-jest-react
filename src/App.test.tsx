import { render, screen, act } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    jest.mock("./__mock__/axios");
  });

  it("Should loading pokemons", async () => {
    render(<App />);
    await act(async () => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("Should find Pokemon by test id", async () => {
    render(<App />);
    const pokemonDivElement = await screen.findByTestId(`pokemon-div-0`);
    expect(pokemonDivElement).toBeInTheDocument();
  });

  it("Should find All Pokemons by test id", async () => {
    render(<App />);
    const pokemons = await screen.findAllByTestId(/pokemon-div/i);
    expect(pokemons.length).toBe(151);
  });
});
