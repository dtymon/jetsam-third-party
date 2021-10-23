import Joi from '.';

describe('joi import test', function () {
  it('can import the module', function () {
    expect(Joi).toBeInstanceOf(Object);
    expect(Joi.boolean).toBeInstanceOf(Function);
    expect(Joi.number).toBeInstanceOf(Function);
    expect(Joi.string).toBeInstanceOf(Function);
  });
});
