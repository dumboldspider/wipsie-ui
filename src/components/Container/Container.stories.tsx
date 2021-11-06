// Generated with util/create-component.js
import React from "react";
import { Container } from "./Container";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Spacing } from "../Spacing";

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

export const Variants = () => (
  <>
    <Container variant="neumorphic">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
      id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
      excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
      Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo
      consequuntur dolores necessitatibus doloremque illo temporibus,
      praesentium perspiciatis consequatur voluptatum. Necessitatibus, quos. Qui
      ea odio omnis officiis, earum rem nesciunt quia temporibus saepe delectus
      dolores iure sequi illum, culpa amet corrupti suscipit aliquid aut non ab
      quaerat laboriosam, consectetur sed. Illum, culpa pariatur rerum molestiae
      tempore inventore quas iste obcaecati eaque ducimus, illo molestias
      eveniet doloribus dolorem doloremque quasi reprehenderit sunt accusantium
      ipsum soluta.
    </Container>
    <Spacing height={2} />
    <Container variant="outlined" backgroundColor="primary">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
      id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
      excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
      Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo
      consequuntur dolores necessitatibus doloremque illo temporibus,
      praesentium perspiciatis consequatur voluptatum. Necessitatibus, quos. Qui
      ea odio omnis officiis, earum rem nesciunt quia temporibus saepe delectus
      dolores iure sequi illum, culpa amet corrupti suscipit aliquid aut non ab
      quaerat laboriosam, consectetur sed. Illum, culpa pariatur rerum molestiae
      tempore inventore quas iste obcaecati eaque ducimus, illo molestias
      eveniet doloribus dolorem doloremque quasi reprehenderit sunt accusantium
      ipsum soluta.
    </Container>
    <Spacing height={2} />
    <Container variant="ghost" backgroundColor="primary">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis
      id, sint aliquid magnam, voluptates ducimus reiciendis velit numquam quas
      excepturi sunt debitis sed odio molestiae sequi perspiciatis quaerat!
      Obcaecati, perspiciatis voluptatem. Non illum dolore, explicabo
      consequuntur dolores necessitatibus doloremque illo temporibus,
      praesentium perspiciatis consequatur voluptatum. Necessitatibus, quos. Qui
      ea odio omnis officiis, earum rem nesciunt quia temporibus saepe delectus
      dolores iure sequi illum, culpa amet corrupti suscipit aliquid aut non ab
      quaerat laboriosam, consectetur sed. Illum, culpa pariatur rerum molestiae
      tempore inventore quas iste obcaecati eaque ducimus, illo molestias
      eveniet doloribus dolorem doloremque quasi reprehenderit sunt accusantium
      ipsum soluta.
    </Container>
    <Spacing height={2} />
    <Container
      shape="square"
      variant="flat"
      p={10}
      backgroundImage={
        "https://images.unsplash.com/photo-1636189395464-c277f6f6f8ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80"
      }
    >
      <Container
        variant="frosted"
        p={10}
        style={{ color: "white" }}
        backgroundColor="primary"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        officiis id, sint aliquid magnam, voluptates ducimus reiciendis velit
        numquam quas excepturi sunt debitis sed odio molestiae sequi
        perspiciatis quaerat! Obcaecati, perspiciatis voluptatem. Non illum
        dolore, explicabo consequuntur dolores necessitatibus doloremque illo
        temporibus, praesentium perspiciatis consequatur voluptatum.
        Necessitatibus, quos. Qui ea odio omnis officiis, earum rem nesciunt
        quia temporibus saepe delectus dolores iure sequi illum, culpa amet
        corrupti suscipit aliquid aut non ab quaerat laboriosam, consectetur
        sed. Illum, culpa pariatur rerum molestiae tempore inventore quas iste
        obcaecati eaque ducimus, illo molestias eveniet doloribus dolorem
        doloremque quasi reprehenderit sunt accusantium ipsum soluta.
      </Container>
    </Container>
    <Spacing height={2} />
    <Container
      shape="square"
      variant="flat"
      p={10}
      backgroundImage={
        "https://images.unsplash.com/photo-1636145354736-439482e677a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
      }
    >
      <Container
        variant="glassmorphic"
        blur={10}
        p={10}
        style={{ color: "white" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        officiis id, sint aliquid magnam, voluptates ducimus reiciendis velit
        numquam quas excepturi sunt debitis sed odio molestiae sequi
        perspiciatis quaerat! Obcaecati, perspiciatis voluptatem. Non illum
        dolore, explicabo consequuntur dolores necessitatibus doloremque illo
        temporibus, praesentium perspiciatis consequatur voluptatum.
        Necessitatibus, quos. Qui ea odio omnis officiis, earum rem nesciunt
        quia temporibus saepe delectus dolores iure sequi illum, culpa amet
        corrupti suscipit aliquid aut non ab quaerat laboriosam, consectetur
        sed. Illum, culpa pariatur rerum molestiae tempore inventore quas iste
        obcaecati eaque ducimus, illo molestias eveniet doloribus dolorem
        doloremque quasi reprehenderit sunt accusantium ipsum soluta.
      </Container>
    </Container>
  </>
);

export const Miopia = () => {
  return (
    <Container>
      <Typography variant="h1" style={{ filter: "blur(4px)" }}>
        MIOPIA
      </Typography>
    </Container>
  );
};
