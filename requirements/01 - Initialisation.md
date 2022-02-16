# Initialisation

1. Use [Prisma's getting started documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgres) to start from scratch, taking note of the below points:
    - **Do not run the `mkdir hello-prisma` or `cd hello-prisma` commands**
    - During the *Connect your database* step, remember to [add support for a shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database#cloud-hosted-shadow-databases-must-be-created-manually).
    - During the *Using Prisma Migrate* step, only add one model with an `id` column but no relations or other fields. This is enough to get migrations working.
    - Once you complete the *Install Prisma Client* step, stop using Prisma's getting started guide and move to requirement 2