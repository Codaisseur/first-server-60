# Relations

## What are relations? Why do we need them? 


### Why add relations?


### Types of relations

**One to One**:

User <-> IdCard
Person <-> Birth Certificate
Person <-> Toothbrush
Person <-> DNA
Person <-> Spouse

**One to Many**:

Person <-> Books
Person <-> Bank account
Person <-> Phone numbers

`person.hasMany(models.book)`
`boook, belongTo(models.person)`

**Many to Many**:

students <-> classes
products <-> user

### Steps to add relation

**Step 0:** Undo all your migrations and add the Foreign key to the seeds

`npx sequelize-cli db:migrate:undo:all`

**Step 1:** Generate a new file to add the relation

`npx sequelize-cli migration:generate --name set-up-relations`

**Step 2:** Modify that file to describe the relation

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
```

**Step 3:** Migrate and check Postico/DBeaver (here you test the migration files)

`npx sequelize-cli db:migrate`

**Step 4:** Write the relations in the models

**Step 5:** Write queries to test (here you test the model files)