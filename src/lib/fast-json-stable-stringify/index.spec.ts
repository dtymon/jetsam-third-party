import { stringify } from '.';

describe('fast-json-stable-stringify import test', function () {
  it('can import the module', function () {
    expect(stringify).toBeInstanceOf(Function);
  });
});
