import lodash from '.';

describe('lodash import test', function () {
  it('can import the module', function () {
    expect(lodash).toBeInstanceOf(Function);
    expect(lodash.isObject).toBeInstanceOf(Function);
  });
});
