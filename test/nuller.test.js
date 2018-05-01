import nuller from '../src';

describe('nuller for default values', () => {
  test('nuller should be exported from the index file', () => {
    expect(nuller).toBeDefined();
  });
  describe('nuller for basic interactions with wrapped object', () => {
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

  describe('nuller for deeper level access', () => {
    const fallBackScheme = {
      name: 'Dagny',
      location: {
        state: 'State'
      }
    };
    it('should use provided fallback value for accessing undefined property', () => {
      const object = {
        location: {
          city: 'Random'
        }
      };
      const wrappedObject = nuller(object, fallBackScheme);
      expect(wrappedObject.location.state).toEqual(
        fallBackScheme.location.state
      );
    });
    it('should use second level deep value if present even if fallback value is present too ', () => {
      const object = {
        location: {
          city: 'Random',
          state: 'object state'
        }
      };
      const wrappedObject = nuller(object, fallBackScheme);
      expect(wrappedObject.location.state).toEqual('object state');
    });
  });
});
