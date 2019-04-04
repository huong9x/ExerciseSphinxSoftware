const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        (err) ? reject(err) : resolve(data);
      });
  })
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, (err) => {
        (err) ? reject(err) : resolve(data);
      });
  })
}
function write(filePath, contentToWrite) {
  readFile(filePath).then((data) => {
    data+=' ' + contentToWrite;
    return writeFile(filePath,data)
  }).catch((err) => {
    console.log(err)
  })
}

write('text.txt', 'World');
