import typeParser from './typeParser';

/**
 * Convert csv format to json format,
 * data must be larger than 1 to make sense
 * @param {any[][]} data
 * @return {object[]}
 */
const CSVToJSON = (data) => {
  const headers = data[0];
  const content = data.slice(1);
  return content.map((row) => Object.fromEntries(row.map((_, i) => [headers[i], row[i]])));
};

/**
 * Convert json format to csv format,
 * data must be well-structured
 * @param {object[]} data
 * @return {any[][]}
 */
const JSONToCSV = (data) => {
  const headers = Object.keys(data[0]); // headers
  return [
    headers,
    ...data.map((row) => Object.values(row)),
  ];
};

/**
 * Stringify data into string format for csv writing purpose
 * @param {any[][]} data
 * @return {string}
 */
const stringifyCSV = (data) => data.map((row) => row.join(',')).join('\n');

/**
 * Convert string to formatted csv format any[][]
 * @param {string} data
 * @return {any[][]}
 */
const readCSV = (data) => data.split('\n').map((row) => row.split(',').map(typeParser.JSONParse));

/**
 * Rename object keys
 * @param {object[]} obj
 * @param {object} newValuePairs
 * @return {object[]}
 */
const renameJSONKeys = (obj, newValuePairs) => obj.map((o) => {
  const newObject = {};
  Object.entries(o).forEach(([k, v]) => {
    const newKey = newValuePairs[k] || k;
    newObject[newKey] = v;
  });
  return newObject;
});

/**
 * Return JSON object with specified keys
 * @param {object[]} obj
 * @param {string[]} keys
 * @return {object[]}
 */
const getJSONByKeys = (obj, keys) => obj.map((o) => {
  const newObject = {};
  keys.forEach((k) => {
    newObject[k] = o[k];
  });
  return newObject;
});

export default {
  CSVToJSON,
  JSONToCSV,
  stringifyCSV,
  readCSV,
  renameJSONKeys,
  getJSONByKeys,
};
