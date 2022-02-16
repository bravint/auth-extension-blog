# Modelling

1. Complete your `schema.prisma` file based on the ERD provided in [README.md](../README.md). Feel free to add more models or properties if they make sense.
2. Complete your seed file for every model so you have data to work with.

Tip: You'll find it easier to add one model to the schema and then add it to the seed file, running the appropriate commands where relevant, rather than fully completing the schema before working on the seed file.

## Prisma command cheat sheet

- `npx prisma generate` to recompile the prisma client, allowing you to access your new models on the prisma client object (e.g. `prisma.user.create`)

- `npx prisma migrate dev --create-only --skip-seed --name NameOfYourMigrationFile` to create a new migration file for each model you add / change without applying it straight to the database

- `npx prisma migrate reset` to reset your database structure, apply all of your migrations in sequence and run your seed file