var exec = require("child_process").exec;
var ejs  = require("ejs");
var fs   = require("fs");

function start(response, postData) {

  var template = "views/start.ejs";

  fs.readFile(template, {encoding: "utf-8"}, function(err, data) {
    if(!err) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(ejs.render(data));
      response.end();
      console.log("rendered " + template);
    } else {
      throw err;
    }
  });
}

function upload(response, postData) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've send: " + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;
