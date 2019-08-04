const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Comment = require('./models/comment');

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
                "Origin, X-Requested-With, Content-Type, Accept"
                );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
                );
  next();
});

app.post('/event/comment', (req, res, next) => {
  const comment = new Comment({
    author: req.body.author,
    strComment: req.body.strComment,
    strIdEvent: req.body.strIdEvent
  });
  comment.save();
  res.status(201).json({
    message: "Comment saved!"
  });
});

app.get('/event/:idEvent/comments', (req, res, next) => {
  console.log('Im in the get comments method' + req.params.idEvent);
  const eventId = req.params.idEvent
  Comment.find({strIdEvent: eventId})
    .then( comments => {
      console.log(comments);
      if(comments){
        res.status(200).json(comments);
      }else{
        res.status(404).json({
          message: 'Comments not found'
        });
      }
    });

});


module.exports = app;
