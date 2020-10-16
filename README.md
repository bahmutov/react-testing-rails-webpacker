# react-testing-rails-webpacker

This is a app generated using [@rails/webpacker](https://github.com/rails/webpacker) with react and typescript defaults and using [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test) to write React component tests

## Known problems

- code coverage is not working yet (something about `nyc` not loading its dependencies)
- make sure the Webpack config is set to `development` and NOT to `production`
```js
// config/webpack/development.js
const config = environment.toWebpackConfig()
config.set('mode', 'development')
```
