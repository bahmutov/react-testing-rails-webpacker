# react-testing-rails-webpacker

![cypress version](https://img.shields.io/badge/cypress-5.4.0-brightgreen) ![cypress-react-unit-test version](https://img.shields.io/badge/cypress--react--unit--test-4.16.0-brightgreen)

This is a app generated using [@rails/webpacker](https://github.com/rails/webpacker) with react and typescript defaults and using [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test) to write React component tests

## Known problems

- code coverage is not working yet (something about `nyc` not loading its dependencies)
- make sure the Webpack config is set to `development` and NOT to `production`
```js
// config/webpack/development.js
const config = environment.toWebpackConfig()
config.set('mode', 'development')
```
