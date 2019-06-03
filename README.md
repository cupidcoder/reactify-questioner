# reactify-questioner &middot; [![CircleCI](https://circleci.com/gh/cupidcoder/reactify-questioner.svg?style=svg)](https://circleci.com/gh/cupidcoder/reactify-questioner) [![Maintainability](https://api.codeclimate.com/v1/badges/5557951f8d0d1fec5a4b/maintainability)](https://codeclimate.com/github/cupidcoder/reactify-questioner/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5557951f8d0d1fec5a4b/test_coverage)](https://codeclimate.com/github/cupidcoder/reactify-questioner/test_coverage)
Conversion of the previously built questioner application to ReactJs.

> Questioner helps meetup organisers crowd-source questions to be asked concerning the meetup and help them prioritize questions that should be answered based on votes by other attendees.

---
Applicaiton is hosted at -> https://reactify-questioner.herokuapp.com
---


---
## Implemented Features
- Users can register on the application
- Users can log into the application
- Users can create a meetup entry
- Users can see all meetup entries created in the system
- Users can fetch a specific meetup entry
- Users can post question to a meetup
- Users can see all questions asked on a meetup
---

## Technologies Used
- [ReactJs](https://reactjs.org/) - A JavaScript framework for building UI components.
- [ReduxJs](https://redux.js.org/) - A JavaScript library used to manage application state.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Axios](https://github.com/axios/axios) A Promise-based HTTP library.
- [JWT](https://www.npmjs.com/package/jsonwebtoken) used to authorize and authenticate API routes.

---

## Testing Tools
- [Jest](https://jestjs.io/) - A JavaScript test framework.
- [Enzyme](https://airbnb.io/enzyme/) - A test assertion library for JavaScript applications.

---

## API Information

The API endpoints are hosted on [Heroku](#https://heroku.com) - https://questioner40.herokuapp.com/api/v1

API documentation was created using Swagger-UI and can be viewed at [API Documentation](https://cupidcoder.github.io/questioner/UI/views/docs/v1) - https://cupidcoder.github.io/questioner/UI/views/docs/v1 

METHOD | DESCRIPTION | ENDPOINTS
-------|-------------|-----------
POST   | User registration | `/api/v1/auth/signup`
POST   | User log in | `/api/v1/auth/signin`
POST   | Create a meetup record | `/api/v1/meetups`
GET    | Get all meetup records | `/api/v1/meetups`
GET    | Get specific meetup record | `/api/v1/meetups/:meetupID`
GET    | Get all upcoming meetup records | `/api/v1/meetups/upcoming`
DELETE    | Delete meetup record | `/api/v1/meetups/:meetupID`
POST   | Respond to a meetup    | `/api/v1/meetups/:meetupID/rsvp`
POST   | Post a question to a meetup     | `/api/v1/questions`
POST   | Post a comment to a question     | `/api/v1/comments`
PATCH  | Upvote a question | `/api/v1/questions/:questionID/upvote`
PATCH  | Downvote a question | `/api/v1/questions/:questionID/downvote`
PATCH  | Add tags | `/api/v1/meetups/:meetupID/tags`
PATCH  | Add images | `/api/v1/meetups/:meetupID/images`
GET    | Get all meetup questions | `/api/v1/meetups/:meetupID/questions`
GET    | Get all question comments | `/api/v1/questions/:questionID/comments`
DELETE | Delete question | `/api/v1/questions/:questionID`
DELETE | Delete comment | `/api/v1/comments/:commentID`



---
## Installation

- You need to have `node` and `npm` installed on your computer
- You may click [Node.js](https://nodejs.org) to get `node` and `npm`

#### Clone

- Clone this repo to your local machine using `git clone https://github.com/cupidcoder/reactify-questioner.git`

#### Environment variables

- Create a `.env` file using the contents in the `.env.example` file, replacing the placeholder with actual values

#### Setup

- Installing the project's dependencies:

> run the command below

```shell
$ npm install
```

> To start the application, run the command below

```shell
$ npm run start:dev
```

> Navigate to `/signin` and log in using the following credentials

email - e.genius@gmail.com

password - questioner40

---

## Test

> run test using the command below

```shell
$ npm test
```

---

## Acknowledgements

* Andela

## Author

* Chukwudi Dennis Umeilechukwu
