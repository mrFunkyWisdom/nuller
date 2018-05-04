/**
 * getPropertyValue is used for getting the value from the object or from the fallbackSchene if present,
 * otherwise it will throw an TypeError.
 *
 * @param prop
 * @param target
 * @param fallBackScheme
 * @returns {*}
 */
const getPropertyValue = (prop, target, fallBackScheme) => {
  if (prop in target || prop in fallBackScheme) {
    return target[prop] ? target[prop] : fallBackScheme[prop];
  }
  throw TypeError(
    `the property ${prop} is not defined in the object neither in the fallback scheme`
  );
};
/**
 * setup handler function is used to set up a handler object for a proxy wrapper
 *
 * @param {Object} fallBackScheme
 * @returns {Object}
 * @throws {TypeError}
 */
const setupHandler = fallBackScheme => ({
  get(target, prop) {
      let value = getPropertyValue(prop, target, fallBackScheme);
      if (typeof value === 'function' || typeof value === 'object') {
        value = new Proxy(value, setupHandler(fallBackScheme[prop]));
      }
      return value;
    }
});

/**
 * function nuller will take one
 *
 * @param {Object} scheme
 * @param {Object} obj
 */
function nuller(scheme, obj) {
  if (arguments.length === 1)
    return object => new Proxy(object, setupHandler(scheme));
  return new Proxy(obj, setupHandler(scheme));
}

export { nuller as default };
