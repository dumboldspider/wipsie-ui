// Generated with util/create-component.js
import React from "react";
import { Accordion } from "./Accordion";
import { Spacing } from "../Spacing";
import { Button } from "../Button";
import {
  StepForwardOutlined,
  RightOutlined,
  LeftOutlined,
  StepBackwardOutlined,
  SyncOutlined,
  HeartTwoTone,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

export default {
  title: "Prototypes/Accordion",
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

export const WithBar = () => (
  <>
    <Accordion panels={panels} size="mini" backgroundColor="primary" />
    <Spacing height={3} />
    <Accordion panels={panels} size="small" labelColor="primary" />
    <Spacing height={3} />
    <Accordion
      panels={panels}
      size="medium"
      labelColor="basic"
      labelBackgroundColor="info"
    />
    <Spacing height={3} />
    <Accordion panels={panels} size="large" />
    <Spacing height={3} />
    <Accordion panels={panels} size="xlarge" contentStyle={{ fontSize: 15 }} />
  </>
);

export const WithBar2 = () => (
  <>
    <Accordion
      panels={[
        {
          icon: <CheckOutlined />,
          label: "awdasd",
          content: (
            <>
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
            </>
          ),
        },
        {
          icon: <CheckOutlined />,
          label: "awdasd",
          content: (
            <>
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
              <Menuitem label="awdawd" />
            </>
          ),
        },
      ]}
      size="medium"
      shape="square"
      backgroundColor="transparent"
      labelColor="primary"
      labelActiveColor="info"
      labelActiveBackgroundColor="#000000"
      labelStyle={{ padding: 10 }}
      contentStyle={{ padding: 0 }}
    />
  </>
);

const Menuitem = ({ label }) => (
  <a href="#">
    <Button
      size="small"
      fullWidth
      shape="square"
      align="left"
      variant="ghost"
      label={label}
      startIcon={<RightOutlined />}
      style={{ fontWeight: 500 }}
    />
  </a>
);
