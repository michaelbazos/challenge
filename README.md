# Challenge [![Build Status](https://travis-ci.org/michaelbazos/challenge.svg?branch=dev)](https://travis-ci.org/michaelbazos/challenge)

This is a sample application for an interview. The task is the following:

> Implement a search result list for hotels

## Requirements

* [Node.js](http://nodejs.org/) (0.12 or above) with `npm`

## Quick start

### Clone project and install dependencies

```bash
git clone https://github.com/michaelbazos/challenge.git && cd challenge

npm i
```
###  Start the application (in dev mode)

The following command will serve the application in development mode, with livereload

```bash
npm start
```

The application is served at [http://localhost:3000](http://localhost:3000) or at the next available port.


### Start the application (in production mode)

The following command will build and serve the application in production mode

```bash
npm run serve:dist
```

Note: if you only want to build the app in production mode and not serve it, just execute `npm run build`


## Tests

Launch the tests with `npm test` (done by Travis CI on push)

## Todo

 - e2e tests
 - handle flash of unstyled content when carousel images are too long to download
 - hotel rating component more precise (rendering with half-filled stars)
 - What about SEO? 
