module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    "import/no-unresolved": "off",
    "no-control-regex": "off",
    "arrow-body-style": ["error", "always"],
    "no-param-reassign": "off",
    "no-mixed-operators": "off",
    "max-len": "off",
  },
};
