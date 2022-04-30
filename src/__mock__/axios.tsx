const mockResponse = {
  data: {
    pokemon: [
      {
        name: "Pokemon1",
        id: 0,
        num: 0,
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
