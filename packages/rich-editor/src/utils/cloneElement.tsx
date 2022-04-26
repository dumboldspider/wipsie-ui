import React from "react";

/**
 * It takes an array of React elements and a set of props, and returns a new array
 * of React elements with the props applied to each element
 * @param children - The children to clone.
 * @param props - The props that will be passed to the cloned element.
 * @returns A function that returns a new array with the children cloned and the
 * props added to each child.
 */
export const cloneElement = (children, props) => {
  try {
    if (children && !children.length) {
      children = [children];
    }

    return (
      children &&
      children.reduce((result, child, index) => {
        if (child) {
          result.push(
            React.cloneElement(child, {
              ...props,
              key: index,
            })
          );
        }

        return result;
      }, [])
    );

    // eslint-disable-next-line no-empty
  } catch (e) {}
};
