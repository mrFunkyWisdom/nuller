import nuller from '../src';

describe('nuller for default values', () => {
  it('it will retun provided default string for requested atribute', () => {
    const fallBackScheme = {
      age: 18,
      name: 'default username'
    };

    const object = nuller({ age: 45 }, fallBackScheme);
    expect(object.name).not.toBeUndefined();
    expect(object.name).toEqual('default username');
  });
});
