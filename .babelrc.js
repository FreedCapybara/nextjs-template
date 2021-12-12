module.exports = {
  "presets": [
    "next/babel"
  ],
  "env": {
    "development": {
      "plugins": [
        "styled-components"
      ]
    },
    "production": {
      "plugins": [
        ["styled-components", {
          "ssr": true
        }]
      ]
    }
  }
};
