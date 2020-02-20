module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true, // this will rarely, if ever, be used by consumers
  },
  extends: ["react-app"],
  plugins: [
    "eslint-plugin-import-helpers",
    "graphql",
    "react",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["/^react/", "module", "/^~/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
}
