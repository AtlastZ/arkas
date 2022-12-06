'use strict';
const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');
const config = {
  channelAccessToken: "pSauSVwqxFumLiPR71clbaKdZOb5ef4gae6S9cdGOAwCJpAOrudm/Q6DEJHwkNectEjb4pipmikATU3n6doK5j9gVi4BNVQL5C+vDqYiVtz0QwMBV0/tnXCrgO5vwPiCv8qH+39+vDQJHfP5gY3YdQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "6f575f93215273de9b8617bd6e788bd4",
};
const client = new line.Client(config);
const app = express();
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  } else if (event.message.type === 'text' && event.message.text === 'Hello') {
    const payload = {
      type: "text",
      text: "สวัสดีครับ พิมพ์คำสั่งที่ต้องการได้เลยครับ"
    };
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === 'เปิดไฟ') {
    const payload = {
      type: "text",
      text: "เปิดไฟแล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0=1');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === 'ปิดไฟ') {
    const payload = {
      type: "text",
      text: "ปิดไฟแล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0=0');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === 'สถานะ') {
    console.log("Printing val GET");
    // var val = axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0')
    // console.log(typeof val);
    // console.log(val);
    
    axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0').then((response) => {
      console.log(response);
    })
    var data = response.data;
    console.log(data);
    if (1 == val) {
      var text1 = "ไฟเปิดอยู่";
    } else {
      var text1 = "ไฟปิดอยู่";
    }
    const payload = {
      type: "text",
      text: text1
    };

    return client.replyMessage(event.replyToken, payload);
  }
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
