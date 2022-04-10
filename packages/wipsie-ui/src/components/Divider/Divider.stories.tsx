// Generated with util/create-component.js
import React from "react";
import { Divider } from "./Divider";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import { Grid } from "../Grid";

export default {
  title: "Prototypes/Divider",
};

export const WithBar = () => (
  <>
    <Container width="300px">
      adaw dawd Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      corrupti ullam, eius quam laudantium error? Libero maiores quidem ea
      facilis.
      <Divider spacing={2} volume={1} shape="rounded" />
      adaw dawd Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      corrupti ullam, eius quam laudantium error? Libero maiores quidem ea
      facilis.
      <Divider>or</Divider>
      adaw dawd Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      corrupti ullam, eius quam laudantium error? Libero maiores quidem ea
      facilis.
    </Container>
    <Spacing height={2} />
    <Container width="500px">
      <Grid container>
        <Grid item xs={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
          molestias, quia sapiente quasi vitae nam tempore consequuntur magni
          ex!
        </Grid>
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Divider direction="vertical" />
        </Grid>
        <Grid item xs={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
          molestias, quia sapiente quasi vitae nam tempore consequuntur magni
          ex!
        </Grid>
      </Grid>
    </Container>
    <Spacing height={2} />
    <Container width="500px" elevation={3}>
      <Grid container>
        <Grid item xs={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
          molestias, quia sapiente quasi vitae nam tempore consequuntur magni
          ex!
        </Grid>
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Divider
            color="primary"
            volume={5}
            shape="rounded"
            direction="vertical"
          >
            or
          </Divider>
        </Grid>
        <Grid item xs={4}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
          molestias, quia sapiente quasi vitae nam tempore consequuntur magni
          ex!
        </Grid>
      </Grid>
    </Container>
  </>
);
