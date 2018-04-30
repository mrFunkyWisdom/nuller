/**
 * Project setup, enough code to pass the first test
 *
 * @param {Object} object
 * @param {Object} defaultScheme
 */
const nuller = (object, defaultScheme) => {
  if (object.name) {
    return object;
  }
  return Object.assign({}, object, { name: defaultScheme.name });
};

export { nuller as default };
