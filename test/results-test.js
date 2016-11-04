'use strict';

const Results = require('../lib/results');
const assert  = require('assert');

describe('Results', () => {
  let results;
  const data = require('./fixtures/data/with-errors.json');

  beforeEach(() => {
    results = new Results(data);
  });

  it('returns a collection of errors', () => {
    let collection = results.errors();
    assert.equal(collection.length, 2);
    assert(collection.every((incident) => { return incident.type === 'error'; }));
  });

  it('returns a collection of warnings', () => {
    let collection = results.warnings();
    assert.equal(collection.length, 8);
    assert(collection.every((incident) => { return incident.type === 'warning'; }));
  });

  it('returns a collection of notices', () => {
    let collection = results.notices();
    assert.equal(collection.length, 107);
    assert(collection.every((incident) => { return incident.type === 'notice'; }));
  });

  it('returns a object to json stringify', () => {
    let asJSON = results.asJSON();
    assert.deepEqual(results.errors(), asJSON.errors);
    assert.deepEqual(results.warnings(), asJSON.warnings);
    assert.deepEqual(results.notices(), asJSON.notices);
  });
});
