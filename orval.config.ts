module.exports = {
  kazusa: {
    output: {
      mode: "tags-split",
      target: "src/generated.ts",
      schemas: "src/models",
      client: "swr",
      mock: true,
      override: {
        mutator: {
          path: "./src/common/api/client.ts",
          name: "apiClient",
        },
      },
    },
    input: {
      target: "./swagger.json",
    },
  },
};
