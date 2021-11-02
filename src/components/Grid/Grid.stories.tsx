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
  <Container style={{ width: "400px", padding: 30 }}>
    <Typography variant="h2">
      This is a complete Form made using only <Link>Wipsie UI</Link>
    </Typography>
    <Spacing height={20} />

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
        <Spacing height={10} />
        <CheckBox
          label={
            <>
              By clicking the button below, I agree to the{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </>
          }
        />
        <Spacing height={10} />
      </Grid>
      <Grid item xs={8}>
        <Link style={{ fontSize: 12, textAlign: "center" }}>
          New here? Create a new account{" "}
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link style={{ fontSize: 12 }}> Forgot Password?</Link>
      </Grid>
      <Grid item xs={12}>
        <Spacing height={10} />
        <Button fullWidth>Submit</Button>
      </Grid>
    </Grid>
  </Container>
);
