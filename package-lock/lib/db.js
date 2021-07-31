var msg = "Hello world";
console.log(msg);

var express = require('express');
var path = require('path');
var app = express();



var mysql=require('mysql2'); //require the mysql2 module (Make sure it is installed)
app.use(express.static(__dirname))

var connection=mysql.createConnection({
host: "localhost",
user: "root", //Your user credential for MySQL would go here
password: "23anxjlo", //Your password for your MySQL would go here!
database: "bdpatest"  //Your database name would go here
});


connection.connect(function(error){  //Check if there is an error or if the connection is successful
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  

module.exports = connection; //Allows us to use this connection item as a module in other .js file


//app.post("/page2.html". function(req, res))
//{
//  console.log("I have recived a post request");
//  res.send(path.join(__dirname + "/page2.html"))
//}



