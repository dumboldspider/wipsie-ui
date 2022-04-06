// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import { Skeleton } from "./Skeleton";
import { Grid } from "../Grid";
import { Flex } from "../Flex";
import { Badge } from "../Badge";
import { Avatar } from "../Avatar";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Spacing } from "../Spacing";
import { Accordion } from "../Accordion";

export default {
  title: "Prototypes/Skeleton",
};

export const WithBar = () => (
  <>
    <Skeleton type="circle" radius={10} m={1} />
    <Skeleton type="circle" radius={10} color="primary" m={1} />
    <Skeleton type="round" width={"100%"} m={1} />
    <Skeleton type="rounded" width={"100%"} m={1} />
    <Skeleton type="square" width={"100%"} m={1} />
  </>
);

export const WithBar2 = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Container maxWidth="550px" width="100%">
        <Grid container>
          <Grid item xs={3}>
            <Skeleton type="circle" radius={"120px"} visible={visible}>
              <Badge
                content={"O BRABO"}
                bordered
                tolerance={0}
                color="info"
                position="top right"
              >
                <Avatar
                  src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
                  xs="120px"
                />
              </Badge>
            </Skeleton>
          </Grid>
          <Grid item xs={9}>
            <Skeleton
              type="rounded"
              width={"100%"}
              visible={visible}
              height={1}
              p={2}
              mb={1.4}
            >
              <Typography variant="h2" color="primary">
                Casemiro Miguel
              </Typography>
              <Spacing height={2} />
            </Skeleton>
            <Skeleton
              type="rounded"
              width={"100%"}
              visible={visible}
              height={1}
              p={1}
              mb={1}
            >
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestiae dicta eligendi illum id, aspernatur
                quaerat. Dignissimos magnam odit repellat.
              </Typography>
            </Skeleton>
            <Skeleton
              type="rounded"
              width={"100%"}
              height={1}
              visible={visible}
              p={1}
              mb={1}
            />
            <Skeleton
              type="rounded"
              width={"100%"}
              height={1}
              visible={visible}
              p={1}
              mb={1}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const WithBar4 = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
        <Grid item xs={6}>
          <WithBar2 />
        </Grid>
      </Grid>
    </>
  );
};
export const WithBar5 = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Accordion
            panels={[
              { label: "ahoy", content: <WithBar2 /> },
              { label: "ahoy", content: <WithBar2 /> },
              { label: "ahoy", content: <WithBar2 /> },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};
