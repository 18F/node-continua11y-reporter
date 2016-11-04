'use strict';

const Reporter  = require('./lib/reporter');
const Results   = require('./lib/results');
const Writer    = require('./lib/writer');

function reports(path) {
  return new Reporter(path);
}

reports.Report  = Report;
reports.Results = Results;
reports.Writer  = Writer;

module.exports  = reports;
