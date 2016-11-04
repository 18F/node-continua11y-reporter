'use strict';

const Writer = require('./writer');

class Report {
  constructor(path) {
    this.path = path || this.defaultPath();
  }

  defaultPath() {
    return process.cwd() + '/accessibility';
  }

  addPage(pageData, results, callback) {
    callback = callback || function () {};
    new Writer(this.path).write(pageData, results, callback);
  }
}

module.exports = Report;
