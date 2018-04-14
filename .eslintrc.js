module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier/standard"],
  plugins: ["prettier", "standard"],
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
