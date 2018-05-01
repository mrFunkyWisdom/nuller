/**
 *
 * @param {Object} targetObject
 * @param {Object} scheme
 */
const setupHandler = (targetObject, scheme) => ({
  get(target, prop) {
    return target[prop] ? target[prop] : scheme[prop];
  }
});

/**
 * Project setup, enough code to pass the first test
 *
 * @param {Object} object
 * @param {Object} defaultScheme
 */
const nuller = (obj, scheme) => new Proxy(obj, setupHandler(obj, scheme));

export { nuller as default };
