import nuller from '../src';

describe('nuller for default values', () => {
  test('nuller should be exported from the index file', () => {
    expect(nuller).toBeDefined();
  });
  describe('nuller for basic interactions with wrapped object', () => {
    const withFallback = nuller({
      age: 18,
      name: 'default username'
    });
    it('will retun provided default string for requested atribute', () => {
      const object = { age: 45 };
      const wrappedObject = withFallback(object);
      expect(wrappedObject.name).not.toBeUndefined();
      expect(wrappedObject.name).toEqual('default username');
    });
    it('will not use fallback value if the actual value is present on the object', () => {
      const object = { name: 'real name' };
      const wrappedObject = withFallback(object);
      expect(wrappedObject.name).toEqual(object.name);
    });
  });
  describe('nuller for deeper level access', () => {
    const fallbackScheme = {
      name: 'Dagny',
      location: {
        state: 'State'
      },
      data: {
        dataName: 'data name',
        moreData: {
          moreDataName: 'moredata'
        }
      }
    };
    it('should use provided fallback value for accessing undefined property', () => {
      const object = {
        location: {
          city: 'Random'
        }
      };
      const wrappedObject = nuller(fallbackScheme, object);
      expect(wrappedObject.location.state).toEqual(
        fallbackScheme.location.state
      );
    });
    it('should use second level deep value if present even if fallback value is present too ', () => {
      const object = {
        location: {
          city: 'Random',
          state: 'object state'
        }
      };
      const wrappedObject = nuller(fallbackScheme, object);
      expect(wrappedObject.location.state).toEqual('object state');
    });
    it('should use deeper fallback value if is present', () => {
      const object = {
        name: 'Hank'
      };
      const wrappedObject = nuller(fallbackScheme, object);
      expect(wrappedObject.data.moreData.moreDataName).toEqual('moredata');
    });
  });
  describe('nuller will throw type error', () => {
    const withFallback = nuller({
      name: 'Eddie'
    });
    it('should throw TypeError if tried to access the property that doesnt exist', () => {
      const object = {
        lastName: 'Willers'
      };
      const wrappedObject = withFallback(object);
      expect(() => wrappedObject.age).toThrow(TypeError);
    });
  });
  describe('nuller for null values', () => {
    it('should return default value if null is present on the object', () => {
      const withFallback = nuller({
        age: 49,
        location: 'unknown'
      });
      const object = withFallback({ name: 'John', location: null });
      expect(object.location).toEqual('unknown');
    });
  });
});
