/**
 * setup handler function is used to set up a handler object for a proxy wrapper
 *
 * @param {Object} fallBackScheme
 * @returns {Object}
 * @throws {TypeError}
 */
const setupHandler = fallBackScheme => ({
  get(target, prop) {
    if (prop in target || prop in fallBackScheme) {
      let value = target[prop] ? target[prop] : fallBackScheme[prop];
      if (typeof value === 'function' || typeof value === 'object') {
        value = new Proxy(value, setupHandler(fallBackScheme[prop]));
      }
      return value;
    }
    throw TypeError(
      `the property ${prop} is not defined in the object neither in the fallback scheme`
    );
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
