# Node Token Authentication Using JWt

This repo uses JSON Web Tokens to implement token based authentication on a simple Node.js API.

## Requirements

- Nodejs and NPM
- MongoDB

## Usage

1. Clone the repo:
2. Install dependencies: `npm install`
3. Change SECRET in `config.js`
4. Add your own MongoDB database to `config.js`
5. Start your mongodb server in the background.
6. Start the server: `node server.js`
7. Create sample user by visiting: `http://localhost:8080/setup`

Once everything is set up, we can begin to use our app by creating and verifying tokens.

### Getting a Token

Send a `POST` request to `http://localhost:8080/api/authenticate` with test user parameters as `x-www-form-urlencoded`. 

```
  {
    name: 'Ayush Mittal',
    password: 'password'
  }
```

### Verifying a Token and Listing Users

Send a `GET` request to `http://localhost:8080/api/users` with a header parameter of `x-access-token` and the token.

