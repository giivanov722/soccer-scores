const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const commentsRoutes = require("./routes/comments");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect("mongodb://localhost:27017/soccer-app", {useNewUrlParser: true})
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(() => {
    console.log('DB connection failed');
  })

app.use(bodyParser.json());
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
                );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, PATCH, PUT, DELETE, OPTIONS"
                );
  next();
});

app.use("/event",commentsRoutes);
app.use("/user", userRoutes);

module.exports = app;
