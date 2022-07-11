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

- User: name:string,email:string, dob, phone, address, password

We get back 2 things:

- Model: representation of our entity
- Migration: instructions on how to build the table

(or more models)

### Migrate

- We need to run the migration to generate (create) the tables.
- `npx sequelize-cli db:migrate` (runs all pending migrations).

- CHECK (open your DB GUI) and see if the table was created.

### Seed some data (add dummy data)

Set up some data file.
Run seeds: `npx sequelize-cli db:seed:all` (this runs ALL seed files, so be careful)
