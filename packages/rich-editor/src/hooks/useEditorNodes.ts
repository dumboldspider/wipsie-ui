import { useState } from "react";
import { useEffect } from "react";
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

/**
 * It returns an array of nodes that match the given match object
 * @param {any} value - The value of the editor.
 * @param {object} match - object
 * @returns An array of nodes.
 */
export const useEditorNodes = (value: any, match: object) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes(getEditorNodes(value, match));
  }, [value]);

  return nodes;
};

/**
 * "It returns the first node in the editor that matches the given match object."
 *
 * The function takes two arguments:
 *
 * value: The editor's value.
 * match: An object that describes the node we're looking for.
 * The function returns the first node in the editor that matches the given match
 * object
 * @param {any} value - The value of the editor.
 * @param {object} match - object
 * @returns A node
 */
export const useEditorFirstNode = (value: any, match: object) => {
  const [node, setNode] = useState(null);

  useEffect(() => {
    setNode(getEditorFirstNode(value, match));
  }, [value]);

  return node;
};
