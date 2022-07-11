## Backend

### Setup

- Create new Node project.
- Git init
- Create .gitignore file
- Install tools (`sequelize sequelize-cli pg`).
- Initialize sequelize
- Connect our database by modifying `config.json`.

## Try it!

- run `npx sequelize-cli db:migrate`

### Define a model === table

- User: name, email, dob, phone, address, password

We get back 2 things:

- Model: representation of our entity
- Migration: instructions on how to build the table

- We need to run the migration to generate the table.
