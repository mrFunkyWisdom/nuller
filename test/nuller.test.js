import nuller from '../src';

describe('nuller for default values', () => {
  test('nuller should be exported from the index file', () => {
    expect(nuller).toBeDefined();
  });
  describe('nuller shuld  ', () => {
    const fallBackScheme = {
      age: 18,
      name: 'default username'
    };
    it('will retun provided default string for requested atribute', () => {
      const object = { age: 45 };
      const wrappedObject = nuller(object, fallBackScheme);
      expect(wrappedObject.name).not.toBeUndefined();
      expect(wrappedObject.name).toEqual('default username');
    });
    it('will not use fallback value if the actual value is present on the object', () => {
      const object = { name: 'real name' };
      const wrappedObject = nuller(object, fallBackScheme);
      expect(wrappedObject.name).toEqual(object.name);
    });
  });
});
