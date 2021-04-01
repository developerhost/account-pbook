const firebase = require("firebase");
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

  // const getData = {
  //   name: data.name,
  //   id: data.screen_name,
  //   description: data.description,
  //   followers_count: data.followers_count,
  //   friends_count: data.friends_count,
  //   statuses_count: data.statuses_count, //ツイート数
  //   profile_image_url: data.profile_image_url
  // };

  request.get({
    uri: URL,
    headers: {
      "Content-type": "application/json",
      // eslint-disable-next-line quote-props
      Authorization:
        // eslint-disable-next-line max-len
        "Bearer AAAAAAAAAAAAAAAAAAAAAOAtOAEAAAAASgAspot9JypeUtd53mMZOO4%2F7KY%3D4tL8qdCCdO4bJIUOCNz1nICYbigdAV9rGdDFAZjpCrCiMsdUEF",
    },
    qs: {
      screen_name: this.newAccountId, // ID=sikaotokoawo
    },
    json: true,
  },

  function(error, req, data) {
    const db = firebase.firestore(); // database
    const accountsRef = db.collection("accounts"); // accountsコレクションへの参照取得
    // eslint-disable-next-line max-len
    const searchAccount = firebase.functions().httpsCallable("helloOnCall");

    searchAccount(this.newAccountId).then((res) => {
      accountsRef.add({
        id: this.newAccountId,
        name: req.data.name,
      });
    });

    if (!error) {
      console.log(
          "name:", data.name,
          "id:", data.screen_name,
          "bio:", data.description,
          "followers:", data.followers_count,
          "follow:", data.friends_count,
          "tweet:", data.statuses_count,
          "image:", data.profile_image_url
      );
    } else {
      console.log(error);
    }
  }
  );

  // const resJson = resRequest.getBody("utf-8");

  // const obj = JSON.parse(resJson); // オブジェクトをJSONとして文字列として出力
  // // parse=JSON形式の文字列を文字列として置き換える

  // const returnRes = {
  //   allData: obj.data,
  // };
  // return returnRes;
});
