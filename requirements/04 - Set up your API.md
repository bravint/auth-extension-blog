# Set up your API

1. Run `npm install -D nodemon` to install [nodemon](https://www.npmjs.com/package/nodemon) as a development dependency
2. Run `npm install express cors` to install ExpressJS and cors
    - [What is cors?](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (tldr; It allows us to make requests to our API from another domain)
3. Replace the `"test"` script in `package.json` with a `"start"` script, use `"nodemon src/index.js"` as the value
    - This allows us to start our app using the `npm start` command. It'll use nodemon to run an index.js file in a directory called `src`, and every time you make any changes to your code the app will automatically restart.
4. Create the `src` directory with an `index.js` file inside
5. Set up express in the `index.js` file using [this example](https://expressjs.com/en/starter/hello-world.html) and your previous exercises as references
