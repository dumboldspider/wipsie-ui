// Generated with util/create-component.js
import React from "react";
import { DragScroll } from "./DragScroll";

export default {
  title: "Prototypes/DragScroll",
};

export const WithBar = () => {
  const [dragging, setDragging] = React.useState(false);

  const onStartScroll = () => {
    setDragging(true);
  };

  const onEndScroll = () => {
    setDragging(false);
  };

  return (
    <DragScroll
      className="scroll-container"
      onStartScroll={onStartScroll}
      onScroll={(event) => {
        console.log("onScroll", event);
      }}
      onClick={(event) => {
        console.log("onClick", event);
      }}
      onEndScroll={onEndScroll}
      style={{
        backgroundColor: "red",
        border: "solid 5px #E2D7C7",
        height: "145px",
        width: "430px",
      }}
    >
      <div
        style={{
          //   height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "20px",
          width: "900px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "green",
        }}
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            style={{ width: "100px", height: "100px", margin: 20 }}
          >
            {index}
          </div>
        ))}
      </div>
    </DragScroll>
  );
};
