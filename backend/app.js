const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

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


app.use('/events',(req,res,next) => {
   const events = [
     {id: "1", home:"Liverpool", away:"Everton", result: "1:0"},
     {id: "2", home:"Chelsea", away:"Tothenam", result: "1:1"},
     {id: "3", home:"Burnley", away:"Manchester City", result: "1:3"},
     {id: "4", home:"Manchester United", away:"Brighton", result: "2:1"},
     {id: "5", home:"Newcastle United", away:"Arsenal", result: "2:2"},
     {id: "6", home:"Levski Kiunec", away:"CSKA-Mangaliq", result: "6:0"}
   ];
  //const events = request.get('https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=4328&r=38&s=1415');
  res.status(200).json({
    message: 'Events fetched',
    events: events
  });
});

module.exports = app;
