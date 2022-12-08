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
  } else if (event.message.type === 'text' && (event.message.text === 'เปิดอุปกรณ์ 1' || event.message.text === 'turn device 1 on'||event.message.text === '11')) {
    const payload = {
      type: "text",
      text: "เปิดอุปกรณ์ 1 แล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v1=1');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && (event.message.text === 'ปิดอุปกรณ์ 1' || event.message.text === 'turn device 1 off'||event.message.text === '10')) {
    const payload = {
      type: "text",
      text: "ปิดอุปกรณ์ 1 แล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v1=0');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && (event.message.text === 'เปิดอุปกรณ์ 2' || event.message.text === 'turn device 2 on'||event.message.text === '21')) {
    const payload = {
      type: "text",
      text: "เปิดอุปกรณ์ 2 แล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v4=1');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && (event.message.text === 'ปิดอุปกรณ์ 2' || event.message.text === 'turn device 2 off'||event.message.text === '20')) {
    const payload = {
      type: "text",
      text: "ปิดอุปกรณ์ 2 แล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v4=0');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && (event.message.text === 'เปิดไฟ' || event.message.text === 'light on'||event.message.text === '01')) {
    const payload = {
      type: "text",
      text: "เปิดไฟแล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0=1');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && (event.message.text === 'ปิดไฟ' || event.message.text === 'light off'||event.message.text === '00')) {
    const payload = {
      type: "text",
      text: "ปิดไฟแล้วนะคะ"
    };
    axios.get('https://sgp1.blynk.cloud/external/api/update?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0=0');
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === 'สถานะ') {
    console.log("Printing val GET");
    axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0').then((response0) => {
      var data = response0.data;
      if (1 === data) {
        var text0 = "หลอดไฟเปิดอยู่";
      } else if (0 === data) {
        var text0 = "หลอดไฟปิดอยู่";
      }
      axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v1').then((response1) => {
        var data1 = response1.data;
        if (1 === data1) {
          var text1 = "อุปกรณ์ 1 เปิดอยู่";
        } else if (0 === data1) {
          var text1 = "อุปกรณ์ 1 ปิดอยู่";
        }
        axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v4').then((response4) => {
          var data4 = response4.data;
          if (1 === data4) {
            var text4 = "อุปกรณ์ 2 เปิดอยู่";
          } else if (0 === data4) {
            var text4 = "อุปกรณ์ 2 ปิดอยู่";
          }
          axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v2').then((response2) => {
            var text2 = "อุณหภูมิ " + response2.data + " องศา";
            axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v3').then((response3) => {
              var text3 = "ความสว่าง " + response3.data + " %";
              const payload = {
                type: "text",
                text: text0 + "\n" + text1 + "\n" + text4 + "\n" + text2 + "\n" + text3
              };
              return client.replyMessage(event.replyToken, payload);
            })
          })
        })
      })

    })
  }else if (event.message.type === 'text' && (event.message.text === 'status'||event.message.text === 'Status')) {
    console.log("Printing val GET");
    axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v0').then((response0) => {
      var data = response0.data;
      if (1 === data) {
        var text0 = "The lamp is on";
      } else if (0 === data) {
        var text0 = "The lamp is off";
      }
      axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v1').then((response1) => {
        var data1 = response1.data;
        if (1 === data1) {
          var text1 = "Device 1 is on";
        } else if (0 === data1) {
          var text1 = "Device 1 is off";
        }
        axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v4').then((response4) => {
          var data4 = response4.data;
          if (1 === data4) {
            var text4 = "Device 2 is on";
          } else if (0 === data4) {
            var text4 = "Device 2 is off";
          }
          axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v2').then((response2) => {
            var text2 = "Temperature " + response2.data + "°C";
            axios.get('https://sgp1.blynk.cloud/external/api/get?token=YHG7jYhhB9zjS-KHhuTnTupvuQucBLan&v3').then((response3) => {
              var text3 = "brightness " + response3.data + " %";
              const payload = {
                type: "text",
                text: text0 + "\n" + text1 + "\n" + text4 + "\n" + text2 + "\n" + text3
              };
              return client.replyMessage(event.replyToken, payload);
            })
          })
        })
      })

    })
  } else if (event.message.type === 'text' && event.message.text === 'test') {
    const payload = {
      type: "text",
      text: "test1\ntest2",
    };
    return client.replyMessage(event.replyToken, payload);
  }else if (event.message.type === 'text' && event.message.text === 'คำสั่ง') {
    const payload = {
      type: "text",
      text: "เช็คสถานะ:[สถานะ]\n,เปิดไฟ:[เปิดไฟ],[01]\nปิดไฟ:[ปิดไฟ],[00]\n1:[เปิดอุปกรณ์ 1][ปิดอุปกรณ์ 1]\n2:[เปิดอุปกรณ์ 2][ปิดอุปกรณ์ 2]\n",
    };
    return client.replyMessage(event.replyToken, payload);
  }else if (event.message.type === 'text' && (event.message.text === 'list'||event.message.text === 'commands'||event.message.text === 'command'||event.message.text === 'Commands'||event.message.text === 'Command')) {
    const payload = {
      type: "text",
      text: "view status:[Status]\n,lamp on:[light on],[01]\nlamp off:[light off],[00]\n1:[turn device 1 on][turn device 1 off]\n2:[turn device 2 on][turn device 2 off]\n",
    };
    return client.replyMessage(event.replyToken, payload);
  } else {
    const payload = {
      "type": "sticker",
      "packageId": "11539",
      "stickerId": "52114129",
    }
    return client.replyMessage(event.replyToken, payload);
  }
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
