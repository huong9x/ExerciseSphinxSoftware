const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
              reject(err)
          } else {
              resolve(data);
          }
      });
  })
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, (err) => {
          if (err) {
              reject(err)
          } else {
              resolve();
          }
      });
  })
}

readFile('text.txt').then((contentToWrite) => {
  contentToWrite+=" len noc nha";
  return writeFile('text.txt',contentToWrite);
}).then(function(){
  console.log('Saved change!');
})