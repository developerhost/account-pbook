const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("テスト!");
// });

exports.helloOnCall = functions.https.onCall((data, context) => {
  const request = require("request");

  const url = "https://api.twitter.com/1.1/users/show.json" + data;

  const res = request("GET", url);
  const resJson = res.getBody("utf-8");

  const obj = JSON.parse(resJson); // オブジェクトをJSONとして文字列として出力
  // parse=JSON形式の文字列を文字列として置き換える

  const returnRes = {
    name: obj.data.name,
  };
  return returnRes;
});
