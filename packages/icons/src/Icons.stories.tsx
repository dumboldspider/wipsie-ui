// Generated with util/create-component.js
import React from "react";
import * as Icon from "./index";
import { Container, Typography, Grid, Spacing, Flex, Input } from "@wipsie/ui";

export default {
  title: "Wipsie Icons/Icons",
};

export const WithBar = () => {
  const [value, setValue] = React.useState("");

  const AllIcons = Object.keys(Icon)
    .filter((key) => key.toLowerCase().includes(value.toLowerCase()))
    .map((key) => {
      const IconComponent = Icon[key];

      return (
        <Grid item xs={3} sm={2}>
          <Container
            variant="neumorphic"
            display="flex"
            align="center"
            justify="center"
            hoverable
            elevation={3}
            elevationHover={10}
          >
            <Typography variant="h1" color="primary">
              <IconComponent />
            </Typography>
            <Spacing height={2} />
            <Typography variant="h6" color="subtext">
              {key}
            </Typography>
          </Container>
        </Grid>
      );
    });

  return (
    <Flex fullWidth>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" color="primary" align="center">
            Wipsie Icons
          </Typography>

          <Spacing height={2} />

          <Input
            placeholder="Search"
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            endAdornment={<Icon.SearchMdIcon size="1.2em" align="unset" />}
          />

          <Spacing height={2} />
        </Grid>

        {AllIcons}
        {AllIcons.length === 0 && (
          <Grid item xs={12}>
            <Spacing height={2} />
            <Typography variant="h1" color="subtext" align="center">
              No icons found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Flex>
  );
};
