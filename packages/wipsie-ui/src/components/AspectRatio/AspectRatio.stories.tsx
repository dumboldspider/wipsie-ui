// Generated with util/create-component.js
import { Container } from "../Container";
import React from "react";
import { AspectRatio } from "./AspectRatio";

export default {
  title: "Prototypes/AspectRatio",
};

export const WithBar = () => (
  <Container width="400px" backgroundColor="red">
    <AspectRatio aspectRatio="16:9">
      <iframe
        src={`https://www.youtube.com/embed/${"IwzUs1IMdyQ"}`}
        frameBorder="0"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  </Container>
);
