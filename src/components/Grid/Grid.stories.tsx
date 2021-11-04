// Generated with util/create-component.js
import React from "react";
import { Grid } from "./Grid";
import { Container } from "../Container";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { CheckBox } from "../CheckBox";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";
import { Link } from "../Link";
import { Flex } from "../Flex";
import { ThemeProvider } from "../../index";

export default {
  title: "Prototypes/Grid",
};

export const WithBaz = () => (
  <Grid container spacing={1.5}>
    <Grid item xs={100} sm={6} md={4} lg={3} xl={6}>
      <Container>
        awdawd
        <br />
        awdawdawd
        <br />
        awdawdawd
        <br />
        awd
      </Container>
    </Grid>
    <Grid item xs={100} sm={6} md={4} lg={6} xl={6}>
      <Container>a</Container>
    </Grid>
    <Grid item xs={100} sm={12} md={4} lg={3} xl={12}>
      <Container>a</Container>
    </Grid>

    <Grid item xs={2}>
      <Container>a</Container>
    </Grid>
    <Grid item xs>
      <Container>a</Container>
    </Grid>
    <Grid item xs={2}>
      <Container>a</Container>
    </Grid>
    <Grid item xs={12}>
      <Container>a</Container>
    </Grid>

    <Grid item xs={"300px"}>
      <Container>fixed 300px width</Container>
    </Grid>
    <Grid item xs>
      <Container>a</Container>
    </Grid>
  </Grid>
);

export const WithBaz2 = () => (
  <Grid container spacing={1.5}>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={6}>
      <Button fullWidth>a</Button>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
      <Button fullWidth>a</Button>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={3} xl={12}>
      <Button fullWidth>a</Button>
    </Grid>
  </Grid>
);

export const WithBaz3 = () => (
  <Grid container spacing={1}>
    <Grid item xs={12} md={4}>
      <ThemeProvider theme="dark">
        <Form />
      </ThemeProvider>
    </Grid>
    <Grid item xs={12} md={4}>
      <ThemeProvider theme="light">
        <Form />
      </ThemeProvider>
    </Grid>
    <Grid item xs={12} md={4}>
      <ThemeProvider theme="cosmic">
        <Form />
      </ThemeProvider>
    </Grid>
  </Grid>
);

const Form = () => (
  <Container maxWidth="390px" p="30px">
    <Typography variant="h2">
      This is a complete Form made using only <Link>Wipsie UI</Link>
    </Typography>
    <Spacing height={2} />

    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder="Full Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder="username" />
      </Grid>
      <Grid item xs={12}>
        <Input fullWidth placeholder="Email" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder="Email" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder="Email" />
      </Grid>
      <Grid item xs={12}>
        <TextArea rows={4} fullWidth placeholder="Leave your message" />
      </Grid>
      <Grid item xs={12}>
        <Spacing height={1} />
        <CheckBox
          label={
            <>
              By clicking the button below, I agree to the{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>
            </>
          }
        />
        <Spacing height={1} />
      </Grid>
      <Grid item xs={12}>
        <Flex
          justify="between"
          align={{ xs: "center", md: "start" }}
          direction={{ xs: "column", md: "row" }}
        >
          <Link style={{ fontSize: 12, textAlign: "center" }}>
            New here? Create a new account{" "}
          </Link>
          <Link style={{ fontSize: 12 }}> Forgot Password?</Link>
        </Flex>
      </Grid>

      <Grid item xs={12}>
        <Spacing height={1} />
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </Grid>
    </Grid>
  </Container>
);
