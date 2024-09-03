const fs = require('fs');

function getFilesFromFS(directoryPath = '~/') {
  return new Promise((resolve, reject) => {
    try{
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          return reject(err);
        }
        resolve(files);
      });
    } catch(err) {
      reject(err);
    }
  })
};

function getFileFromFS(filePath) {
  return new Promise((resolve, reject) => {
    try{
      fs.readFile(filePath, function (err, data) {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    } catch(err) {
      reject(err);
    }
  })
}

function getFSTree(path = '~/') {
  return new Promise((resolve, reject) => {
    try{
      fs.readdir(path, { withFileTypes: true, recursive: true }, function (err, files) {
        if (err) {
          return reject(err);
        }
        resolve(files);
      });
    } catch(err) {
      reject(err);
    }
  });
};

module.exports = {
  getFilesFromFS,
  getFileFromFS,
  getFSTree
}