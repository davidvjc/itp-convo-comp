var servi = require('servi');
var Twit = require('twit');

var twit = new Twit({
    consumer_key: 'NnHFuspeyuQqKK3yex3qLaGBF',
    consumer_secret: 'FiegwOPM5Xxjf0uItv0wujCmwfuZBuB8vpi5z1qpmWGt2SUyYr',
    access_token: '14381020-yEBlElWMiY3nm673NCFNo3081h4OveXkGwuAZ0xaA',
    access_token_secret: 'nppZ4utN9zmW205TN4PyGPPY10p9iT2Sz6kXrWoWG7MOw'
});


var app = new servi(true);

port(8080);

route('/statuses', getData);

serveFiles("public");


function getData(request) {
  twit.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
    console.log(data);

    request.header("application/json");
    request.respond(JSON.stringify(data.statuses));
  });
}

start();