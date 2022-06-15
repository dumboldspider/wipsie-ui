import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Flex,
  Grid,
  Input,
  Page,
  Spacing,
  ThemeProvider,
  Typography,
  useTheme,
} from "@wipsie/ui";
import * as Icon from "@wipsie/icons";

export default function Home() {
  const initialValue = `
  <h1 align="center">Hello World</h1>
  <p>This is a simple <span class="wuire-rgb">example</span><b></b> of a React component.</p><p><br></p>
  <p>Click on the box to: <span class="wuire-spoiler" onclick="this.classList.toggle('wuire-spoiler-open');">See the Spoiler</span></p>
`;
  const theme = useTheme();
  const [value, setValue] = useState(initialValue);
  const [seltheme, setTheme] = useState<"light" | "dark" | "cosmic">("light");
  const onChange = (value: string) => {
    setValue(value);
  };

  const handleThemeChange = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else if (prev === "dark") {
        return "cosmic";
      } else {
        return "light";
      }
    });
  };

  const [valueI, setValueI] = React.useState("");

  const AllIcons = Object.keys(Icon)
    .filter((key) => key.toLowerCase().includes(valueI.toLowerCase()))
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
    <ThemeProvider theme={seltheme}>
      <CssBaseline />
      <Page
        className="App"
        backgroundColor="primary"
        display="flex"
        direction="column"
        align="center"
        justify="center"
        p={2}
      >
        <Button backgroundColor="secondary" onClick={handleThemeChange}>
          {seltheme}
        </Button>

        <Spacing height={2} />

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
              <Typography variant="h1" align="center">
                Wipsie Icons
              </Typography>

              <Spacing height={2} />

              <Input
                placeholder="Search"
                value={valueI}
                onChange={(e: any) => setValueI(e.target.value)}
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
      </Page>
    </ThemeProvider>
  );
}
