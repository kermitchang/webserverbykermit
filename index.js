const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express(); //建立一個Express伺服器

const VERIFY_TOKEN = 'YOUR_TOKEN';
const PAGE_TOKEN = 'PAGE_TOKEN';

app.get('/', function (req, res) {
  //res.send('<h1>Express is excellent!</h1>')
  if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.listen(PORT, function () {
  console.log('Example app is running on port 3000!');}
); //告訴server聽取3000這個Port
/*
const http = require('http');
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');

});
server.listen(PORT);
*/

/*
import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
//import config from '../config';

const app = express();
const port = '7123';
const VERIFY_TOKEN = 'YOUR_TOKEN';
const PAGE_TOKEN = 'PAGE_TOKEN';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

app.post('/webhook/', (req, res) => {

  console.log(req.body);

  const messaging_events = req.body.entry[0].messaging;
  for (let i = 0; i < messaging_events.length; i++) {
    const event = req.body.entry[0].messaging[i];
    const sender = event.sender.id;
    if (event.message && event.message.text) {
      const text = event.message.text;
      sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }
  }
  res.sendStatus(200);
});

app.listen(port, () => console.log(`listening on port ${port}`));

function sendTextMessage(sender, text) {
  
  const messageData = {
    text: text
  }

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
        access_token:PAGE_TOKEN
    },
    method: 'POST',
    json: {
      recipient: {
        id: sender
      },
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}
*/