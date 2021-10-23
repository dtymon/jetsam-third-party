import { fsync } from '.';

describe('fs-extra import test', function () {
  it('can import the module', function () {
    expect(fsync).toBeInstanceOf(Function);
  });
});
