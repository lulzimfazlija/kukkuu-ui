[![codecov](https://codecov.io/gh/City-of-Helsinki/kukkuu-ui/branch/develop/graph/badge.svg)](https://codecov.io/gh/City-of-Helsinki/kukkuu-ui)
[![Build Status](https://travis-ci.org/City-of-Helsinki/kukkuu-ui.svg?branch=develop)](https://travis-ci.org/City-of-Helsinki/kukkuu-ui)

# UI for Kulttuurin kummilapset / Godchildren of Culture

## Getting started

- Clone the repo.
- Create `.env.local` from default `.env` if you need to modify some environment variable. For more, check [this](https://create-react-app.dev/docs/adding-custom-environment-variables#docsNav)
- Run `yarn start`.

For isolated developing environment, you can use our Docker instructions.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker

`docker-compose up` to start the dockerized dev-environment. Not for production!!!  
`docker-compose down` stops the container.

## Debugging
### Debugging project in VS Code

To debug in VS Code:
1. Install the "Debugger for Chrome" extension to VS Code
2. Run `yarn start`
3. Set a breakpoint
4. Run "Chrome" debug configuration in VS Code
5. Reload the project in your browser

### Debugging Tests in VS Code

No plugin is needed.

1. Set a breakpoint
2. Run the "Debug tests" debugger configuration

### Debugging Tests in Chrome

We recommend using VS Code's debugger.

1. Place a `debugger;` statement in any test
2. Run yarn `test:debug`
3. Open `about:inspect` in Chrome
4. Select `inspect` on you process, press Play and you're good to go.

See more detailed instructions here:
https://create-react-app.dev/docs/debugging-tests#debugging-tests-in-chrome

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
