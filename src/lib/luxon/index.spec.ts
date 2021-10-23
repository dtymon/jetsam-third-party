import { DateTime } from '.';

describe('luxon import test', function () {
  it('can import the module', function () {
    expect(DateTime).toBeInstanceOf(Function);
  });
});
