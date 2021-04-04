const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyCYJfNnxnsjKlQeoj7_Lh6qSh_-v7j8VTM",
  authDomain: "account-pbook.firebaseapp.com",
  projectId: "account-pbook",
  storageBucket: "account-pbook.appspot.com",
  messagingSenderId: "795086205807",
  appId: "1:795086205807:web:924c790f4a0a998383ae9a",
  measurementId: "G-8VJG0TR5EC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const functions = firebase.functions();

functions.useFunctionsEmulator("http://localhost:5001"); //ローカルでfirebaseにアクセスするもの

const main = async () => {
  const helloOnCall = functions.httpsCallable("helloOnCall");
  const res = await helloOnCall("sikaotokoawo"); // ここの中身を変えても結果は変わらない
  console.log(res);
};

main();