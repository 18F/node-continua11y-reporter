'use strict';

const crypto = require('crypto');
const fs     = require('fs');

class Writer {
  constructor(path) {
    this.path = path;
  }

  write(pageData, results, callback) {
    this.ensurePathExists((err) => {
      if (err) { return callback(err); }
      this.writeFile(pageData, results, callback);
    });
  }

  ensurePathExists(callback) {
    fs.exists(this.path, (exists) => {
      if (exists) { return callback(); }
      fs.mkdir(this.path, (err) => { callback(err); });
    });
  }

  writeFile(pageData, results, callback) {
    let path = this.filePath(pageData);
    let data = Object.assign({}, pageData, {results: results});
    fs.writeFile(path, JSON.stringify(data), {flag: 'w'}, callback);
  }

  filePath(data) {
    let hashkey = Object
      .keys(data)
      .sort()
      .map((key) => {
        return data[key];
      })
      .join('--');

    let hashed = crypto
      .createHash('md5')
      .update(hashkey)
      .digest('hex');

    return this.path + '/' + hashed + '.json';
  }
}

module.exports = Writer;
