import _ from "lodash";

/**
 * "Get all the nodes in the editor that match the given match object."
 *
 * The function takes two arguments:
 *
 * value: any
 * match: object
 * The value argument is the editor's value. The match argument is an object that
 * contains the properties that we want to match
 * @param {any} value - The value of the editor's state.
 * @param {object} match - object - The object to match.
 * @returns An array of objects that match the match object.
 */
export const getEditorNodes = (value: any, match: object) => {
  let nodes = [...value, ...value.map((data) => data?.children).flat()];
  return _.filter(nodes, _.matches(match));
};

/**
 * Find the first node in the editor that matches the given match object.
 * @param {any} value - The value of the editor
 * @param {object} match - object
 * @returns The first node that matches the match object.
 */
export const getEditorFirstNode = (value: any, match: object) => {
  return _.find(value, _.matches(match));
};
