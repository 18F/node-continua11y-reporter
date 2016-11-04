'use strict';

const crypto      = require('crypto');
const assert      = require('assert');
const rimraf      = require('rimraf');
const Writer      = require('../lib/writer');

describe('Writer', () => {
  const basePath = __dirname + '/fixtures/accessibility';
  const results  = require('./fixtures/data/with-errors.json');
  const pageData = {
    path: 'my-great-page',
    size: 'mobile',
    other: 'stuff'
  };
  const writer = new Writer(basePath);

  let filename;

  beforeEach((done) => {
    filename = crypto
      .createHash('md5')
      .update('stuff--my-great-page--mobile')
      .digest('hex') + '.json';
    rimraf(basePath, () => { done(); });
  });

  it('deduces the file path based on the data passed in', () => {
    assert.equal(writer.filePath(pageData), basePath + '/' + filename);
  });

  it('combines page data with results, and writes to file even if the directory does not exist', (done) => {
    writer.write(pageData, results, (err) => {
      if (err) { return done(err); }
      let savedData = require(writer.filePath(pageData));
      assert.deepEqual(savedData.results, results);
      assert.deepEqual(savedData.path, pageData.path);
      assert.deepEqual(savedData.size, pageData.size);
      assert.deepEqual(savedData.other, pageData.other);
      done();
    });
  });
});
