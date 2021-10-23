import yargs from '.';

describe('yargs import test', function () {
  it('can import the module', function () {
    expect(yargs).toBeInstanceOf(Object);
    expect(yargs.argv).toBeDefined();
  });
});
