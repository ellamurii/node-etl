## Contains ETL operations

## Built With

This section is the list of major frameworks/libraries used to bootstrap the project.

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

- Logging

  - [Winston](https://github.com/winstonjs/winston) - Logger
  - [Morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware

- Swagger
  - [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express) - auto-generated swagger-ui API docs
  - [TSOA](https://tsoa-community.github.io/docs/) - typesafe OpenAPI spec generator

## Prerequisites

1. NodeJS >= v16
2. Typescript

## Installation

1. Download the dependencies from the root directory of the project.

```bash
yarn install
```

3. Start the application:

```bash
yarn dev
```

- swagger: http://localhost:8000/docs
- ping: http://localhost:8000/ping

## Folder Structure Conventions

    .
    ├── public/                 # public static files
    ├── src/                    # Source files
        ├── controllers/
        ├── lib/                # external lib configs
        ├── routes/
    ├── package.json            # Node Dependencies and Script list
    └── README.md

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
