
const needle = require('needle');
const fs = require("fs");
const { Console } = require('console');

const arrayStr = process.argv;
const url = (arrayStr[2]);
const localPath = (arrayStr[3]);



// let file;
const writeFileToPath = function (data) {
  // file = websiteContents;
  fs.writeFile(localPath, data, err => {
    if (err) {
      console.error(err);
      return
    }
    console.log(`Downloaded and saved ${data.length} bytes to ${localPath}.`);
  })
};


const RetreiveFile = function () {
  needle.get(url, (error, response, body) => {
    if (error) {
      console.log("error:", error);
      console.log('statusCode:', response && response.statusCode);
    }
    const websiteContents = body;

      writeFileToPath(websiteContents);
  });
  };

RetreiveFile();






