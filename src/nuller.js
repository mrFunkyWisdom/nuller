/**
 * setup handler function is used to set up a handler object for a proxy wrapper
 *
 * @param {Object} targetObject
 * @param {Object} fallBackScheme
 */
const setupHandler = fallBackScheme => {
  const handler = {
    get(target, prop) {
      let value = target[prop] ? target[prop] : fallBackScheme[prop];
      if (typeof value === 'function' || typeof value === 'object') {
        value = new Proxy(value, setupHandler(fallBackScheme[prop]));
      }
      return value;
    }
  };
  return handler;
};

/**
 * function nuller
 *
 * @param {Object} object
 * @param {Object} defaultScheme
 */
const nuller = (obj, scheme) => new Proxy(obj, setupHandler(scheme));

export { nuller as default };
