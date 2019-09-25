const fs = require("fs");
const request = require('request');

let args = process.argv.slice(2);
let samplePath = args[1];
let URL = args[0];

const requestR = function(url, path, callback) {

 request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  callback(path, body);
});
}

const writeFile = function(path, contents) {
  fs.writeFile(path, contents, (err) => {
    if (err) console.log(err);
  });
  const stats = Buffer.byteLength(contents);
  console.log(`Downloaded and saved ${stats} bytes to path ${path}`);
}

requestR(URL, samplePath, writeFile);
