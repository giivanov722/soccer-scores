const express = require("express");

const Comment = require("../models/comment");
const authCheck = require("../middleware/authentication-check");

const router = express.Router();


router.post('/comment', authCheck, (req, res, next) => {
  const comment = new Comment({
    author: req.body.author,
    strComment: req.body.strComment,
    strIdEvent: req.body.strIdEvent,
    createAt: Date.now(),
    creator: req.userData.userId
  });
  console.log();
  console.log('comments server');
  console.log('message for save: ' + comment);

  comment.save();
  res.status(201).json({
    message: "Comment saved!"
  });
});

router.get('/:idEvent/comments', authCheck, (req, res, next) => {
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

router.delete("/comments/:idComment", authCheck, (req, res, next) => {
  Comment.deleteOne({_id: req.params.idComment, creator: req.userData.userId})
  .then(result => {
    if (result.n > 0) {
      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(401).json({message: "Not authorized to delete comment"});
    }
  });
});

module.exports = router;
