var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'FahZjs4X8G6qEAfyHXH59sEW1',
  cunsumer_secret: 'q5tXdwWHXwenpB2aPZm4DRlpacJlFZmLl2jV7adntZcvVUESnu',
  access_token_key: '1056207757315993600-kUC9UlrRPUxyQcRzGbSOl3oiI4FXfw',
  access_token_secret: 'yaVQONBHtTUdQh9cK89dEeN8gNifQc538UW97cOKWtA8V'
});

var params = {screen_name: 'sikaotokoawo'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    
  }
});