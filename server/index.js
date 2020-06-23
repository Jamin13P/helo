require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const app = express();
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
  })
);

app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login);
app.get("/auth/user", ctrl.getUser);
app.post("/auth/logout", ctrl.logout);

app.get("/api/posts", ctrl.getAllPosts)
