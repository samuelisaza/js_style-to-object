'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toObject = sourceString
    .trim()
    .split(';')
    .map((element) => {
      return element.trim();
    })
    .filter((element) => {
      return element.length > 0;
    })
    .map((element) => {
      return element.split(':');
    })
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return toObject;
}

module.exports = convertToObject;
