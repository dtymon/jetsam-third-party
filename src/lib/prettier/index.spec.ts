import { format } from '.';

describe('prettier import test', function () {
  it('can import the module', function () {
    expect(format).toBeInstanceOf(Function);
  });
});
