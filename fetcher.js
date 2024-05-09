// terminal input example
// > node fetcher.js http://www.example.edu/ ./index.html

//  - require needel and fs 
//  - process.argv to get comand from terminal 
//  - const the wed address and the file path
//  - send request to needle for file 
//  -- nest writing the file into the desired path 
//  -- -- nest console.log(`Downloaded and saved ${file 
//        that was returned .length} bytes to ${file path}.` )

// terminal output for example
// Downloaded and saved 3261 bytes to ./index.html

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






