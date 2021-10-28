// Generated with util/create-component.js
import React from "react";
import { Container } from "./Container";
import { Typography } from "../Typography";
import { Button } from "../Button";

export default {
  title: "Components/Container",
  component: Container,
  argTypes: {
    children: { control: "text" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    hoverBackgroundColor: { control: "color" },
    clickable: { control: "boolean" },
  },
};
const Template = (args) => <Container {...args} />;

export const Custom = Template.bind({}) as any;
Custom.args = {
  children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
  id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
  excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
  Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo consequuntur
  dolores necessitatibus doloremque illo temporibus, praesentium perspiciatis
  consequatur voluptatum. Necessitatibus, quos. Qui ea odio omnis officiis,
  earum rem nesciunt quia temporibus saepe delectus dolores iure sequi illum,
  culpa amet corrupti suscipit aliquid aut non ab quaerat laboriosam,
  consectetur sed. Illum, culpa pariatur rerum molestiae tempore inventore
  quas iste obcaecati eaque ducimus, illo molestias eveniet doloribus dolorem
  doloremque quasi reprehenderit sunt accusantium ipsum soluta.`,
};

export const Default = () => (
  <Container>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
    id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
    excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
    Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo consequuntur
    dolores necessitatibus doloremque illo temporibus, praesentium perspiciatis
    consequatur voluptatum. Necessitatibus, quos. Qui ea odio omnis officiis,
    earum rem nesciunt quia temporibus saepe delectus dolores iure sequi illum,
    culpa amet corrupti suscipit aliquid aut non ab quaerat laboriosam,
    consectetur sed. Illum, culpa pariatur rerum molestiae tempore inventore
    quas iste obcaecati eaque ducimus, illo molestias eveniet doloribus dolorem
    doloremque quasi reprehenderit sunt accusantium ipsum soluta.
  </Container>
);

export const Clickable = () => (
  <Container
    backgroundColor="background"
    hoverBackgroundColor="highlight"
    clickable
  >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
    id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
    excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
    Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo consequuntur
    dolores necessitatibus doloremque illo temporibus, praesentium perspiciatis
    consequatur voluptatum. Necessitatibus, quos. Qui ea odio omnis officiis,
    earum rem nesciunt quia temporibus saepe delectus dolores iure sequi illum,
    culpa amet corrupti suscipit aliquid aut non ab quaerat laboriosam,
    consectetur sed. Illum, culpa pariatur rerum molestiae tempore inventore
    quas iste obcaecati eaque ducimus, illo molestias eveniet doloribus dolorem
    doloremque quasi reprehenderit sunt accusantium ipsum soluta.
  </Container>
);

export const Example = () => (
  <Container
    backgroundColor="background"
    hoverBackgroundColor="highlight"
    clickable
  >
    <Typography variant="h1">Lorem, ipsum.</Typography>
    <br />
    <Typography variant="body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus
      eligendi voluptate reiciendis, officia laboriosam impedit voluptatem rerum
      nobis optio.
    </Typography>
    <br />
    <Button>Lorem Ipsum</Button>
  </Container>
);
