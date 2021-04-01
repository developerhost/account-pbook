// const firebase = require("firebase");
const functions = require("firebase-functions");

exports.helloOnCall = functions.https.onzzCall((data, context) => {
  const request = require("request");

  const URL = "https://api.twitter.com/1.1/users/show.json";

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
      screen_name: "sikaotokoawo", // ID=sikaotokoawo
    },
    json: true,
  },

  function(error, data) {
    console.log(data);
    return data;
    // const db = firebase.firestore(); // database
    // const accountsRef = db.collection("accounts"); // accountsコレクションへの参照取得
    // // eslint-disable-next-line max-len
    // const searchAccount = firebase.functions().httpsCallable("helloOnCall");

    // searchAccount(this.newAccountId).then((res) => {
    //   accountsRef.add({
    //     id: this.newAccountId,
    //     name: req.data.name,
    //   });
    // });
    // if (!error) {
    //   console.log(
    //       "name:", data.name,
    //       "id:", data.screen_name,
    //       "bio:", data.description,
    //       "followers:", data.followers_count,
    //       "follow:", data.friends_count,
    //       "tweet:", data.statuses_count,
    //       "image:", data.profile_image_url
    //   );
    // } else {
    //   console.log(error);
    // }
  }
  );
});
