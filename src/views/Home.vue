<template>
  <div>
    <v-text-field
      label="Regular"
      v-model="newAccountId"
    ></v-text-field>
    <v-btn @click="addAccount()">
      追加
    </v-btn>

    <ul>
      <!-- key=accountsのIDが入る(dmNzy2QX92wE8fR4t5WG) -->
      <li v-for="(account, key) in accounts" :key="key">
        {{ key }}
        {{ account }}
        {{ account.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    
  },
  data: () => ({
    db: null,
    accountsRef: null,
    newAccountId: "",
    accounts: {} //firebaseから帰ってくるアカウント情報
  }),
  created(){
    this.db = firebase.firestore()
    this.accountsRef = this.db.collection('accounts')

    //イベントリスナーの登録
    this.accountsRef.onSnapshot(querySnapshot => {
      const obj = {}
      //querySnapshot=現在の全てのデータ
        querySnapshot.forEach(doc => {
          // doc.id = firebase acccountのID(dmNzy2QX92wE8fR4t5WG)
          // doc.data() = 実際の中身(id:sikaotokoawo)
          obj[doc.id] = doc.data() //これをaccountsに入れる
        })
        this.accounts = obj
    })
  },
  
  methods: {
    addAccount(){
      if(this.newAccountId === ''){
        alert("IDを入力してください");
      }else{
        console.log("1");
        // const functions = firebase.functions();
        // functions.useFunctionsEmulator("http://localhost:5001"); 

        var searchAccount = firebase.functions().httpsCallable("helloOnCall");
        console.log("2");
        
        searchAccount("AbeShinzo").then((res) => {
          console.log(res);
          
          this.accountsRef.add({
            id: "SatoMasahisa",
            // name: res.name
          })
        }).catch(e => {
          console.log(e);
        })
      }
    }
  }
}
</script>