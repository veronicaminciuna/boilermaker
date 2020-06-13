const express = require("express");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const compression = require("compression");
const SequelizeStore = require("npm ins");
const db = require("../db/db");
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;
const app = express();
const socketio = require("socket.io");

module.exports = app;
