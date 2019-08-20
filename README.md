# Get the project running
#### Backend
```
yarn install
yarn start:dev
```
#### Frontend
```
yarn install
yarn start
```

## Build to production
#### Backend
```
yarn build
```
#### Frontend
```
yarn build
```

# Packages
## Backend

* NestJS - Great for simple applications. Helps by providing a way to develop a nice and clean architecture. Also provides many good defaults like:
    * Prettier - Helps formatting code.
    * TypeScript - Brings classes, interfaces and types to Javascript. It only works well if fed correctly with types for everything or else it turns to being annoying to code on.
    * Tslint - A linter following TypeScript way of coding. linting is used for code analysis, helps to find syntax errors, also helps with maintenability and readability.
    * Express - Node's most used framework.
    * Axios - Make http requests.
    * Nodemon - 'Hot reload' for backend. Also helps with env variables.
    * Dependency injection - Creates a more loosely coupled code. Essential for testing.

## Frontend

* Create React App - Provides a ready-to-work React application also with many good defaults like:
    * Webpack - Hot reload, minifies and breaks css and js, and a whole lot of magic involved.
    * Babel - With ES6+ support, Babel is used to transpile modern javascript code to work with older browsers.
* Axios - Make http requests
* React router - Implement navigation to the app.
* Material UI - Provides React UI components
* React Infinite Scroller - Infinite scroller that load movies as the page is scrolled.
* ESLint - A nice linter to work with react.

# Architecture & decisions
* I've choosen NestJS as I'm learning it lately. I've found it ease to architect an application. A simple monolithic application was enough for this project. For more robust applications I would used like Asp.Net core to backend, and use React & Redux and other tools on frontend.
* While requesting upcoming movies, the api did not provide genre names, so I needed to keep a property on the service constructor to be able to use this collection of genres on each request.
* I've used adapter both to return only the data I needed to return and to include the genres string. Returning only the data needed helps with network traffic and performance.
* Constants that keeps important things centralized and decrease duplicity.
* Focused on keep the user interface responsive
* Focused on creating some pure function components
* Even though I don't fully yet understand Hooks, I tried to utilize it in some places. In Search page I've tried to use debounce hook for text input + infinite scroll, each one calling one different useEffect which didn't work well. I replaced debounce hook for a button to get search term.
* I've used High Order Component on Header to use React Router's withRouter.
* Thought about using Redux and even imported it, but it might be over engineer
* The react app is working as a PWA
* The api return some duplicated movies e.g. page 4 and 5 for 'test'. If I use .map((element, index)=> then I would be showing duplicated movie cards. I opt to keep the error.
* Upcoming movies endpoint is returning already released movies. Is it a api bug or something I should be looking to hide movie cards with release date < today