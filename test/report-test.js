'use strict';

const fs              = require('fs');
const assert          = require('assert');
const rimraf          = require('rimraf');
const FileWriter      = require('../lib/writer');
const Report          = require('../lib/report');

describe('Report', () => {
  const results = require('./fixtures/data/no-errors.json');
  const basePath  = __dirname + '/fixtures/accessibility';
  let   report, pageData, filepath;

  beforeEach((done) => {
    pageData = {
      path: '/foo',
      size: 'very large',
      other: 'stuff'
    };
    filepath = new FileWriter(basePath).filePath(pageData);
    report   = new Report(basePath);
    rimraf(basePath, () => { done(); });
  });

  it('addPage writes a file to the right location', (done) => {
    report.addPage(pageData, results, (err) => {
      if (err) { done(err); }
      assert(fs.existsSync(filepath));
      done();
    });
  });
});
