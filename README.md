# Account Management System 

## Description

This is a sample project to provide an API of account management system

It is built with [Nest](https://github.com/nestjs/nest) framework 

## Installation

```bash
$ npm install
```

## Running the app

Create .env file like this
```dotenv
DB_SCHEMA=public
DB_HOST=loclahost
DB_NAME=postgres
DB_USERNAME=postgres
DB_PASSWORD=password
DB_SSL=false
```

Run migrations and seeders
```bash
npm run migration:run
```

Run application
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation
OpenApi Documentation is available at `http://localhost:3000/docs`
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Contributors

-  [Taron Petrosyan](https://github.com/taroninak)


## License

[MIT licensed](LICENSE)
