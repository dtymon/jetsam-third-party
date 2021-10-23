import axios from '.';

describe('axios import test', function () {
  it('can import the module', function () {
    expect(axios).toBeInstanceOf(Function);
  });
});
