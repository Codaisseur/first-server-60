- Implement the basic CRUD (create, read, update and delete) actions using the appropriate HTTP methods.

`CREATE (post), READ (get), UPDATE (put, patch), DELETE`

- Respond with the correct status codes.

`200 -> everything is good`
`400 -> client error, something went wrong`
`500 -> server error`

- Parse the HTTP request body, when necessary, and use it accordingly.

`express.json()`

- Define routes that satisfy the REST constraints.

`GET /users -> list of users`
`GET /users/:id -> one user with that id`
`GET /users/:id/list -> lists for a specific user`
`POST /users -> creating a new user`

- Persist the data (in most cases, anyway).

`database`