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
  const res = await helloOnCall("sikaotokoawo");
  console.log(res);
};

main();

//firebaseでAPIアクセス

//結果
// name: ディック@マッチングアプリカメラマン 
// id: sikaotokoawo 
// bio: Tinder累計3000マッチ✨見た目改善とマッチングアプリの情報を発信 💻 156cmのブス非モテでもTinder攻略する方法 ✍️ 講習と撮影希望はDMへ ☝️ ガチブサイクから2年で人生変えました🔧作ったサービス→ https://t.co/lcnLRk7KeL?amp=1 
// followers: 11214 
// follow: 586 
// tweet: 6370 
// image: http://pbs.twimg.com/profile_images/1276708088737742850/XiL3tzj0_normal.jpg
