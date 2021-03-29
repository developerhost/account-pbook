const request = require("request");

var URL = "https://api.twitter.com/1.1/users/show.json";

request.get(
  {
    uri: URL,
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAOAtOAEAAAAASgAspot9JypeUtd53mMZOO4%2F7KY%3D4tL8qdCCdO4bJIUOCNz1nICYbigdAV9rGdDFAZjpCrCiMsdUEF",
    },
    qs: {
      screen_name: "sikaotokoawo",
      // ?hoge=hugaの部分
    },
    json: true,
  },
  function (err, req, data) {
    console.log(data.name);
  }
);