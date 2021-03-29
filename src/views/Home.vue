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
        var searchAccount = firebase.functions().httpsCallable("helloOnCall");
        searchAccount(this.newAccountId).then((res) => {
          this.accountsRef.add({
            id: this.newAccountId,
            name: res.data.name
          })
        })
      }
    }
  }
}
</script>