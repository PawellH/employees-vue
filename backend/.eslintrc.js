module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "airbnb-base",
    ],
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": 0,
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "import/no-unresolved": "off",
      "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
      "no-control-regex": "off",
      "arrow-body-style": ["error", "always"],
      "no-param-reassign": "off",
      "no-mixed-operators": "off",
      camelcase: "off",
    },
  };