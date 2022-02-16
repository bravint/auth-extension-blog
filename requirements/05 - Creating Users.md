# Creating Users

- Build a route to create a user with a profile
- The route should respond back to the client with the created user and it's profile in this format:

```json
{
    "data": {
        "id": 1,
        ...,
        "profile": {
            "firstName": "",
            ...
        }
    }
}
```