// Generated with util/create-component.js
import React, { useState, useRef } from "react";
import { Popover } from "./Popover";
import { Button } from "../Button";
import { Spacing } from "../Spacing";
import { Fixed } from "../Fixed";
import { IconButton } from "../IconButton";
import { Container } from "../Container";
import { Page } from "../Page";
import { Grid } from "../Grid";
import { Accordion } from "../Accordion";
import { Flex } from "../Flex";
import {
  InfoCircleOutlined,
  StepForwardOutlined,
  RightOutlined,
  LeftOutlined,
  StepBackwardOutlined,
  SyncOutlined,
  HeartTwoTone,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default {
  title: "Prototypes/Popover",
};

const panels = [
  {
    icon: <StepForwardOutlined />,
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    icon: <SyncOutlined />,
    label: "Screen Readers Actually Read That Stuff",
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    icon: <CheckOutlined />,
    label: "They Fail Poorly and Often",
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    icon: <RightOutlined />,
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];

export const WithBar = () => {
  return (
    <>
      <Page p={20} pt={10}>
        <Grid container>
          <Grid item xs={3}>
            <Spacing height={4} />
          </Grid>
          <Grid item xs={6}>
            <Flex direction="row" justify="between" align="center">
              <Popover content={"tooltip"} position="top left">
                <Button>Top Left</Button>
              </Popover>
              <Popover content={"tooltip"} position="top" visible spacing={4}>
                <Button>Top</Button>
              </Popover>
              <Popover content={"tooltip"} position="top right">
                <Button>Top Right</Button>
              </Popover>
            </Flex>
          </Grid>
          <Grid item xs={3}>
            <Spacing height={4} />
          </Grid>

          <Grid item xs={3}>
            <Flex direction="column" justify="between" align="start">
              <Popover content={"tooltip"} position="left top">
                <Button>Left Top</Button>
              </Popover>
              <Popover content={"tooltip"} position="left">
                <Button>Left</Button>
              </Popover>
              <Popover content={"tooltip"} position="left bottom">
                <Button>Left Bottom</Button>
              </Popover>
            </Flex>
          </Grid>
          <Grid item xs={6}>
            <Spacing height={4} />
          </Grid>
          <Grid item xs={3}>
            <Flex direction="column" justify="between" align="end">
              <Popover
                content={
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas euismod, nisi vel consectetur interdum, nisl nunc
                    egestas nisi, euismod aliquam nisl nunc egestas
                  </div>
                }
                position="right top"
              >
                <Button>Right Top</Button>
              </Popover>
              <Popover
                content={
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas euismod, nisi vel consectetur interdum, nisl nunc
                      egestas nisi, euismod aliquam nisl nunc egestas
                    </p>
                  </div>
                }
                position="right"
              >
                <Button>Right</Button>
              </Popover>
              <Popover content={"tooltip"} position="right bottom">
                <Button>Right Bottom</Button>
              </Popover>
            </Flex>
          </Grid>

          <Grid item xs={3}>
            <Spacing height={4} />
          </Grid>
          <Grid item xs={6}>
            <Flex direction="row" justify="between" align="center">
              <Popover content={"tooltip"} position="bottom left">
                <Button>Bottom Left</Button>
              </Popover>
              <Popover content={"tooltip"} position="bottom">
                <Button>Bottom</Button>
              </Popover>
              <Popover content={"tooltip"} position="bottom right">
                <Button>Bottom Right</Button>
              </Popover>
            </Flex>
          </Grid>
          <Grid item xs={3}>
            <Spacing height={4} />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export const WithWidth = () => {
  return (
    <>
      <Spacing height={4} />
      <Popover
        content="This would be a text for the tooltip"
        position="left"
        shape="round"
      >
        <Button>With Popover</Button>
      </Popover>
      <Spacing height={4} />
      <Popover
        content="This would be a text for the tooltip"
        width={20}
        position="right"
        shape="square"
        backgroundColor="info"
        arrow
      >
        <Button>With Popover</Button>
      </Popover>
      <Spacing height={4} />
      <Popover content="This would be a text for the tooltip" position="top">
        <Button>With Popover</Button>
      </Popover>
      <Spacing height={4} />
      <Popover
        content="This would be a text for the tooltip"
        position="right"
        spacing={0.2}
        visible
      >
        <IconButton>
          <InfoCircleOutlined />
        </IconButton>
      </Popover>
    </>
  );
};

export const Toggle = () => {
  const [visible, setVisible] = useState(true);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef(null);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setVisible(false));

  return (
    <>
      click to toggle
      <Spacing height={1} />
      {visible ? "visible" : "hidden"}
      <Spacing height={2} />
      <Popover
        content="This would be a text for the tooltip"
        width={20}
        position="right"
        visible={visible}
        spacing={0.2}
        arrow
      >
        <IconButton ref={ref} onClick={() => setVisible(!visible)}>
          <InfoCircleOutlined />
        </IconButton>
      </Popover>
      <Spacing height={4} />
    </>
  );
};

export const ToggleWithBackdrop = () => {
  const [visible, setVisible] = useState(true);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef(null);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setVisible(false));

  return (
    <>
      click to toggle
      <Spacing height={1} />
      {visible ? "visible" : "hidden"}
      <Spacing height={2} />
      <Popover
        content="This would be a text for the tooltip"
        width={20}
        position="right"
        visible={visible}
        spacing={0.2}
        backgroundColor="background"
        backdrop
        onBackdropClick={() => {
          setVisible(!visible);
        }}
        backdropProps={{
          duration: 100,
        }}
        arrow
      >
        <IconButton ref={ref} onClick={() => setVisible(!visible)}>
          <InfoCircleOutlined />
        </IconButton>
      </Popover>
      <Spacing height={4} />
    </>
  );
};

export const Menu = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      click to toggle
      <Spacing height={1} />
      {visible ? "visible" : "hidden"}
      <Spacing height={2} />
      <Popover
        backgroundColor="info"
        spacing={0.2}
        content={
          <>
            <Menuitem label="awdaawdawdawwd" />
            <Menuitem label="awddawdawdawdawd" />
            <Menuitem label="awdaawdawdawdwd" />
            <Popover
              backgroundColor="info"
              content={
                <>
                  <Menuitem label="awdaawdawdawwd" />
                  <Menuitem label="awddawdawdawdawd" />

                  <Popover
                    backgroundColor="info"
                    content={
                      <>
                        <Menuitem label="awdaawdawdawwd" />
                        <Menuitem label="awddawdawdawdawd" />
                        <Menuitem label="awdaawdawdawdwd" />
                        <Menuitem label="awddawdawdawdawd" />
                        <Menuitem label="awdaawdawdawdwd" />
                        <Popover
                          backgroundColor="info"
                          content={
                            <>
                              <Menuitem label="awdaawdawdawwd" />
                              <Menuitem label="awddawdawdawdawd" />
                              <Menuitem label="awdaawdawdawdwd" />
                              <Menuitem label="awdaawdawdawdwd" />
                              <Popover
                                backgroundColor="info"
                                content={
                                  <>
                                    <Menuitem label="awdaawdawdawwd" />
                                    <Menuitem label="awddawdawdawdawd" />
                                    <Menuitem label="awdaawdawdawdwd" />
                                  </>
                                }
                                position="right top"
                                spacing={0}
                                hoverSpacing={0}
                              >
                                <Menuitem label="awdaawdawdwdawdawdawdawdwd" />
                              </Popover>
                            </>
                          }
                          position="right top"
                          spacing={0}
                          hoverSpacing={0}
                        >
                          <Menuitem label="awdaawdawdwdawdawdawdawdwd" />
                        </Popover>
                      </>
                    }
                    position="left top"
                    spacing={0}
                    hoverSpacing={0}
                  >
                    <Menuitem label="awdaawdawdwdawdawdawdawdwd" />
                  </Popover>
                </>
              }
              position="right top"
              spacing={0}
              hoverSpacing={0}
            >
              <Menuitem label="awdaawdawdwdawdawdawdawdwd" />
            </Popover>
          </>
        }
        position="right top"
        visible={visible}
      >
        <IconButton onClick={() => setVisible(!visible)}>
          <InfoCircleOutlined />
        </IconButton>
      </Popover>
      <Spacing height={4} />
    </>
  );
};

const Menuitem = ({ label }) => (
  <a href="#">
    <Button
      size="small"
      fullWidth
      shape="square"
      align="left"
      label={label}
      backgroundColor="black"
      hoverColor="red"
      variant="ghost"
      startIcon={<RightOutlined />}
      style={{ fontWeight: 500 }}
    />
  </a>
);
