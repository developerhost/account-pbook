// const firebase = require("firebase");
/* eslint-disable */
const functions = require("firebase-functions");

function Get_data(accountId) {
  const request = require("request-promise");
  const URL = "https://api.twitter.com/1.1/users/show.json";

  var options = {
    uri: URL,
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAOAtOAEAAAAASgAspot9JypeUtd53mMZOO4%2F7KY%3D4tL8qdCCdO4bJIUOCNz1nICYbigdAV9rGdDFAZjpCrCiMsdUEF",
    },
    qs: {
      screen_name: accountId, // ID=sikaotokoawo
    },
    json: true,
  };

  return new Promise((resolve, reject) => {
    request(options)
        .then((res) => {
          resolve(res);
        })
  });
}

exports.helloOnCall = functions.https.onCall((data) => {
  console.log(Get_data());
  
  return Get_data();
  // Get_data(data).then((res) => {
  //   firebase.firestore().collection()
  // })
});
