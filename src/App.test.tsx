import pokemonGet from "./axios/api";
import mockAxios from "axios";

const pokemonMock = {
  id: 1,
  num: "001",
  name: "Bulbasaur",
  img: "http://www.serebii.net/pokemongo/pokemon/001.png",
  type: ["Grass", "Poison"],
};


jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({
      data: {
        pokemon: [
          {
            id: 1,
            num: "001",
            name: "Bulbasaur",
            img: "http://www.serebii.net/pokemongo/pokemon/001.png",
            type: ["Grass", "Poison"],
          },
        ],
      },
    }),
  },
}));

describe("Api", () => {
  afterEach(jest.clearAllMocks);
  test("should return a name", async () => {
    const result = await pokemonGet();
    expect(result).toStrictEqual([pokemonMock]);
    expect(mockAxios.get).toBeCalledTimes(3);
  });
});
