[![codecov](https://codecov.io/gh/City-of-Helsinki/kukkuu-ui/branch/develop/graph/badge.svg)](https://codecov.io/gh/City-of-Helsinki/kukkuu-ui)
[![Build Status](https://travis-ci.org/City-of-Helsinki/kukkuu-ui.svg?branch=develop)](https://travis-ci.org/City-of-Helsinki/kukkuu-ui)

# UI for Kulttuurin kummilapset / Godchildren of Culture

## Getting started

- Clone the repo.
- Create `.env.local` from default `.env` if you need to modify some environment variable. For more, check [this](https://create-react-app.dev/docs/adding-custom-environment-variables#docsNav)
- Run `yarn start`.

For isolated developing environment, you can use our Docker instructions.

### .env variables

Change REACT_APP_ELIGIBLE_CITIES if you wish to use the project in another city or municipality.

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

### `yarn update-translations`

Fetches translation data from our Google Spreadsheet and updates translation files. See `.env` for configuration.

You still need to update jest snapshots and add the translation files to the git repository manually.

### `yarn graphql-types`

Generate static types for GraphQL queries by using the schema from the backend server.

## Docker

`docker-compose up` to start the dockerized dev-environment. Not for production!!!  
`docker-compose down` stops the container.

## Setting up development environment locally with docker

### Set tunnistamo hostname

Add the following line to your hosts file (`/etc/hosts` on mac and linux):

    127.0.0.1 tunnistamo-backend

### Create a new OAuth app on GitHub

Go to https://github.com/settings/developers/ and add a new app with the following settings:

- Application name: can be anything, e.g. local tunnistamo
- Homepage URL: http://tunnistamo-backend:8000
- Authorization callback URL: http://tunnistamo-backend:8000/accounts/github/login/callback/

Save. You'll need the created **Client ID** and **Client Secret** for configuring tunnistamo in the next step.

### Install local tunnistamo

Clone https://github.com/City-of-Helsinki/tunnistamo/.

Follow the instructions for setting up tunnistamo locally. Before running `docker-compose up` set the following settings in tunnistamo roots `docker-compose.env.yaml`:

- SOCIAL_AUTH_GITHUB_KEY: **Client ID** from the GitHub OAuth app
- SOCIAL_AUTH_GITHUB_SECRET: **Client Secret** from the GitHub OAuth app

As of Nov 15 2019 there is a bug in tunnistamo with cors, a workaround is to set this line in `tunnistamo/settings.py`:
`CORS_URLS_REGEX = r'.*/(\.well-known/openid-configuration|v1|openid|api-tokens|jwt-token).*'`

After you've got tunnistamo running locally, ssh to the tunnistamo docker container:

`docker-compose exec django bash`

and execute the following four commands inside your docker container:

```bash
./manage.py add_oidc_client -n kukkuu-ui -t "id_token token" -u "http://localhost:3000/callback" "http://localhost:3000/silent_renew" "http://localhost:3000/silent_renew.html" -i https://api.hel.fi/auth/kukkuu-ui -m github -s dev
./manage.py add_oidc_client -n kukkuu-api -t "code" -u http://localhost:8081/return -i https://api.hel.fi/auth/kukkuu -m github -s dev -c
./manage.py add_oidc_api -n kukkuu -d https://api.hel.fi/auth -s email,profile -c https://api.hel.fi/auth/kukkuu
./manage.py add_oidc_api_scope -an kukkuu -c https://api.hel.fi/auth/kukkuu-ui -n "Kulttuurin kummilapset" -d"Lorem ipsum"
```

### Install kukkuu locally

Clone the repository (https://github.com/City-of-Helsinki/kukkuu). Follow the instructions for running kukkuu with docker. Before running `docker-compose up` set the following settings in kukkuu roots `docker-compose.env.yaml`:

- CORS_ORIGIN_ALLOW_ALL=1
- TOKEN_AUTH_AUTHSERVER_URL=http://tunnistamo-backend:8000/openid

### kukkuu-ui

Run `docker-compose up`, now the app should be running at `http://localhost:3000/`!
`docker-compose down` stops the container.

OR

Run `yarn && yarn start`

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

### Debug Redux state

Redux internal state can be visualized with [Redux-devtools](https://github.com/zalmoxisus/redux-devtools-extension)

1. Follow instructions in [here](https://github.com/zalmoxisus/redux-devtools-extension)
2. Explore.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
