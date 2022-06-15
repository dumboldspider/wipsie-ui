import { useState } from "react";
import { useEffect } from "react";
import { getEditorNodes, getEditorFirstNode } from "../utils/getEditorNodes";

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
