// Custom modules
const myMiddleware = require('./middleware.js');
// NPM modules
const morgan = require("morgan");
const express = require("express");
// instantiate express
const app = express();

// Middleware using .use()
app.use(myMiddleware);
app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.emre = "Is the instructor";
  next();
});

// Setup a default response to root GET /
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my website</h1>");
});

// Query params
app.get("/query-params", (req, res) => {
  let returnString = "";
  for (key in req.query) {
    returnString += `${key} is ${req.query[key]}, `;
  }
  res.send(`Query params: ${returnString}`);
});

// URL params
app.get("/:urlParam", (req, res) => {
  res.send(`urlParam: ${req.params.urlParam}`);
});

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

// setup and run server
app.listen(3000, () => {
  console.log("listening on port 3000");
});
