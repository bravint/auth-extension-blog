# Creating Posts

- Build a route to create a post
- The route should connect the post to a category or create a new category if the one provided in the request doesn't exist
- The route should respond with the complete post data, including the user and category it's related to

Example response format:

```json
{
    "data": {
        "title": "",
        ...,
        "category": {
            "id": 1,
            ...,
        },
        "user": {
            "id": 1,
            ...,
            "profile": {
                "id": 1,
                ...
            }
        }
    }
}
```