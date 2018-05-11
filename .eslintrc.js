module.exports = {
  "parser" : "babel-eslint",
  "plugins": ["react", "css-modules"],
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:css-modules/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
     "jsx": true
    }
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "15.0",
      "flowVersion": "0.53"
    },
    "propWrapperFunctions": [ "forbidExtraProps" ]
  },
  "rules": {
    "indent": ["warn", 2],
    "no-unused-vars": "warn",
    "semi": [1, "always"],
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-indent-props": 1,
    "react/jsx-indent": ["warn", 2],
    "css-modules/no-unused-class": [2, { "camelCase": true }],
    "css-modules/no-undef-class": [2, { "camelCase": true }]
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6" : true
  }
};
