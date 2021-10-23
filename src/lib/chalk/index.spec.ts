import chalk from '.';

describe('chalk import test', function () {
  it('can import the module', function () {
    expect(chalk).toBeInstanceOf(Object);
    expect(typeof chalk).toEqual('function');
  });
});
