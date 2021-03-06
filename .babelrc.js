module.exports = {
  "presets": [
    "next/babel"
  ],
  "env": {
    "development": {
      "plugins": [
        ["react-intl", {
          "messagesDir": "lang/.messages/"
        }],
        "styled-components"
      ]
    },
    "production": {
      "plugins": [
        ["react-intl", {
          "messagesDir": "lang/.messages/"
        }],
        ["styled-components", {
          "ssr": true
        }]
      ]
    }
  }
};
