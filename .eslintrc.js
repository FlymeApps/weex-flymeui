module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "globals": {
    "document": false,
    "navigator": false,
    "location": false,
    "weex": true,
    "Vue": true
  },
  "rules": {
    "semi": [2, "always"],
    "no-control-regex": "off",
    "no-extend-native": "off",
    "camelcase": "off"
  },
  "extends": "vue",
  plugins: [
    'vuefix'
  ]
};
