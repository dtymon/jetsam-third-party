import { parse, stringify } from '.';

describe('json5 import test', function () {
  it('can import the module', function () {
    expect(parse).toBeInstanceOf(Function);
    expect(stringify).toBeInstanceOf(Function);
  });
});
