"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Try to parse word to number etc naively using JSONParse
 * @param {string} word
 * @return {any}
 */
var JSONParse = function JSONParse(word) {
  try {
    return JSON.parse(word);
  } catch (err) {
    return word;
  }
};

var _default = {
  JSONParse: JSONParse
};
exports["default"] = _default;