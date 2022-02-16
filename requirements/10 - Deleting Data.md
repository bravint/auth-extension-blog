# Deleting Data

- Build a route to delete posts
    - You will have to delete every comment related to the post first
- Build a route to delete comments
    - You won't be able to delete a parent comment if it has any children; this should be handled by changing the parent comment's text to `[removed]`
- Build a route to delete a user
    - This will require deleting all comments and posts the user has created