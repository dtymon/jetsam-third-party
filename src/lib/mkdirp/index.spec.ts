import mkdirp from '.';

describe('mkdirp import test', function () {
  it('can import the module', function () {
    expect(mkdirp).toBeInstanceOf(Function);
    expect(mkdirp.sync).toBeInstanceOf(Function);
    expect(mkdirp.native).toBeInstanceOf(Function);
  });
});
