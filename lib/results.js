'use strict';

class Results {
  constructor(data) {
    this.data = data;
  }

  errors() {
    return this.getByType('error');
  }

  warnings() {
    return this.getByType('warning');
  }

  notices() {
    return this.getByType('notice');
  }

  asJSON() {
    return {
      errors: this.errors(),
      warnings: this.warnings(),
      notices: this.notices()
    };
  }

  getByType(type) {
    return this.data.filter((incident) => { return incident.type === type; });
  }
}

module.exports = Results;
