import Vue from 'vue';
// Ajax通信ライブラリ
import axios from 'axios';

// Json取得のベースURL
const URL_BASE = '/api/search/';

// Vue.js のインスタンス
module.exports = new Vue({
  data: {
    // Jsonデータ格納用
    search_list: []
  },
  methods: {
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_ajax(url, name) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data);
        this.$emit('GET_AJAX_COMPLETE');
      });
    },
    // プロパティ名を指定してデータを取得
    get_data(name) {
      return this.$data[name];
    }
  }
});

//設定
const API_KEY = 'FahZjs4X8G6qEAfyHXH59sEW1';
const API_SECRETKEY = 'q5tXdwWHXwenpB2aPZm4DRlpacJlFZmLl2jV7adntZcvVUESnu';
const ACCESSTOKEN = '1056207757315993600-kUC9UlrRPUxyQcRzGbSOl3oiI4FXfw';
const ACCESSTOKENSECRET = 'yaVQONBHtTUdQh9cK89dEeN8gNifQc538UW97cOKWtA8V';
const REQUEST_URL = 'https://api.twitter.com/1.1/users/show.json'; //エンドポイント
const request_method = 'GET';

// キーを作成する (URLエンコードする)

axios.get("https://api.twitter.com/1.1/users/show.json", {
        headers: {
          //認証情報
          API_KEY: 'FahZjs4X8G6qEAfyHXH59sEW1',
          API_SECRETKEY: 'q5tXdwWHXwenpB2aPZm4DRlpacJlFZmLl2jV7adntZcvVUESnu',
          ACCESSTOKEN: '1056207757315993600-kUC9UlrRPUxyQcRzGbSOl3oiI4FXfw',
          ACCESSTOKENSECRET: 'yaVQONBHtTUdQh9cK89dEeN8gNifQc538UW97cOKWtA8V',
          REQUEST_URL: 'https://api.twitter.com/1.1/users/show.json', //エンドポイント
          request_method: 'GET'
        },
        params: {
          screen_name: "AbeShinzo",
        },
      });