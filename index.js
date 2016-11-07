'use strict';

const Reporter  = require('./lib/reporter');
const Writer    = require('./lib/writer');

function reports(path) {
  return new Reporter(path);
}

reports.Reporter  = Reporter;
reports.Writer  = Writer;

module.exports  = reports;
