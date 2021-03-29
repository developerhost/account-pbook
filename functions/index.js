const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("テスト!");
// });

exports.helloOnCall = functions.https.onRequest((req, res) => {
  const request = require("request");

  const URL = "https://api.twitter.com/1.1/users/show.json";

  const resRequest = request.get({
    uri: URL,
    headers: {
      "Content-type": "application/json",
      // eslint-disable-next-line quote-props
      Authorization:
        // eslint-disable-next-line max-len
        "Bearer AAAAAAAAAAAAAAAAAAAAAOAtOAEAAAAASgAspot9JypeUtd53mMZOO4%2F7KY%3D4tL8qdCCdO4bJIUOCNz1nICYbigdAV9rGdDFAZjpCrCiMsdUEF",
    },
    qs: {
      screen_name: "sikaotokoawo",
    },
    json: true,
  }
  // function(error, req, data) {
  //   if (!error) {
  //     console.log(data.name);
  //   } else {
  //     console.log(error);
  //   }
  // }
  );

  const resJson = resRequest.getBody("utf-8");

  const obj = JSON.parse(resJson); // オブジェクトをJSONとして文字列として出力
  // parse=JSON形式の文字列を文字列として置き換える

  const returnRes = {
    allData: obj.data,
  };
  return returnRes;
});
