## nextjs-template
This is a NextJS boilerplate with all the fixins:

* [Next.js](https://github.com/zeit/next.js)
* SSR via Next.js
* Code splitting via Next.js
* SEO via [Next.js Head](https://nextjs.org/docs#populating-head)
* [Redux](https://react-redux.js.org/introduction/quick-start)
* [Redux-Sagas](https://redux-saga.js.org/) via [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) and [next-redux-saga](https://github.com/bmealhouse/next-redux-saga)
* [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
* [PropTypes](https://github.com/facebook/prop-types) for type checking ([React docs](https://reactjs.org/docs/typechecking-with-proptypes.html))
* [styled-components](https://www.styled-components.com/) because apparently it's all the rage
* [Isomorphic Unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) because Next.js seems to recommend it and why not
* [React Intl](https://github.com/formatjs/react-intl) for i18n (see [this example](https://github.com/zeit/next.js/tree/master/examples/with-react-intl) and [this issue](https://github.com/zeit/next.js/issues/6385))
* i18n enforced with the [jsx no literals](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md) rule
* [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme) for unit tests ([Guide](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe))
* [Cypress](https://www.cypress.io/) for E2E tests ([Guide](https://buttercms.com/blog/how-to-test-nextjs-apps))
* Code linting with [EsLint](https://eslint.org/docs/user-guide/getting-started) and [ESLint-plugin-React](https://github.com/yannickcr/eslint-plugin-react)
* Accessibility linting with [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* Static code analysis with [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
* [Lodash](https://lodash.com/docs) and [Moment.js](https://momentjs.com/docs/) utilities

## Get started
```sh
yarn install
yarn dev
```

## Scripts
```sh
# running & building
yarn dev   # start dev
yarn build # prod build
yarn start # start prod

# linting
yarn lint  # runs the linter

# testing
yarn test  # runs unit tests
yarn test:watch # runs tests in real time as files update
yarn e2e   # runs integration tests on the command line
yarn e2e:open # runs integration tests interactively in a browser window
```

## Recipes/How-to
Coming soon

* Add an HTTP interceptor
* Configure route guards
* Configure authentication
* Add Redux/saga stuff
* Add a new configuration thing
* Change the theme
* Add an integration test
* Add a unit test
* Add a language
* Add a page
* Add a component

