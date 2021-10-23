import { v4 as uuidv4 } from '.';

describe('uuid import test', function () {
  it('can import the module', function () {
    expect(uuidv4).toBeInstanceOf(Function);
  });
});
