const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const growingKeys = require('./index').growingKeys;
describe('growingKeys', () => {
  it('growingKeys should return an empty object if nothing passed in', function() {
    assert.equal(growingKeys(), {});
  });
  it('growingKeys should return an object with the passed in string repeting incrimentally as the objects keys', function() {
    assert.equal(growingKeys(2, 'hey'), {'hey': true, 'heyhey': true});
  });
  it('growingKeys should return -1 if none one or both of the data types being passed in are wrong', function() {
    assert.equal(growingKeys([1,2,3], {}), -1);
  });

});
