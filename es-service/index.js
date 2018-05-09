var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empser"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/getQuest', function(req, res){
	console.log("getQuest is called....");
	con.query("SELECT * FROM qu", function(err, result, fields){
	  	if(err)	throw err;
	  	res.send(result);
	});
});
app.listen(8021,function(){
  console.log("Server started on PORT No:8021");
})