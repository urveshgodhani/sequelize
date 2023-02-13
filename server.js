const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const dotenv = require("dotenv");
const passport = require("passport");
const { initializingPassport } = require("./middleware/passportStrategy");
const expressSession = require("express-session");
//db coonection
require("./config/db");

//passport defualt config
initializingPassport(passport);
app.use(express.json());
app.use(
  expressSession({ secret: "secret", saveUninitialized: true, resave: true })
);
app.use(passport.initialize());
app.use(passport.session());

//dotenv config
dotenv.config({ path: "./config/config.env" });

//accept JSON
app.use(express.json());

//Mount route
const routes = require("./router/User");
const errorHandler = require("./middleware/eroorHandler");

app.use("", routes);

app.use(errorHandler);

//server connection
const PORT = 5000;
app.listen(PORT, console.log(`Server running in ${PORT}`));
