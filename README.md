# Authentication Extension: Blog Domain

This extension requires completion of the [blog-domain-challenge-2](https://github.com/boolean-uk/blog-domain-challenge-2) repo (up to requirement 8) of the API module.

## Set up

- Fork this repository and clone the fork to your machine.
- Choose Option 1 **or** Option 2 below to copy your existing work over:

### Option 1 - Copy / paste

1. Copy all of the files and folders **except** `README.md` and `./node_modules/` into this new repo
2. Run `npm ci` to install dependencies

### Option 2 - Use git

1. Add a new remote to your local repo that points to your `blog-domain-challenge-2` repository, giving it the name *upstream*: `git remote add upstream THE_URL_TO_THE_REPO`
2. Fetch data from the upstream repo: `git fetch upstream`
3. Merge in the code from upstream: `git rebase upstream/main`
4. Copy over your `.env` file from your local blog-domain-challenge-2 repo
5. Run `npm ci` to install dependencies

## Requirements

1. Change your user creation controller to:
    1. Hash the user's password.
    2. Not include the password in the API response.

2. Add a login route
    1. The route should accept both combinations of username and password OR email and password.
    2. Verify the credentials are correct and send back an error if not.
    2. If the credentials are correct, create a JSON Web Token using the users ID and username as its payload. Do not commit the secret key you use to create the token; this should be an environment variable.
    3. Send the token in the response.

3. Now that you have a way to log users in, change your post **and** comment create, update and delete routes to only work if a valid JWT is provided in an `authorization` header:
    1. If no header is present or the token is invalid, send back an error with a 401 response code.
    2. If the header is present and valid, run the expected logic.

4. You will have noticed some repetitive code during requirement 3 where you're constantly checking for a valid token. Move this repetitive code into its own [express middleware](https://expressjs.com/en/guide/using-middleware.html), and then attach the middleware to the routes.
