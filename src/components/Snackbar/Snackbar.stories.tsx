// Generated with util/create-component.js
import React from "react";
import { Snackbar } from "./Snackbar";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Spacing } from "../Spacing";
import { Button } from "../Button";

export default {
  title: "Prototypes/Snackbar",
};

export const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <Snackbar
        id="sidebar"
        open={open}
        position="center right"
        spacing={0}
        animation="slideInRight"
        backdrop
        fullHeight
        onBackdropClick={() => setOpen(false)}
      >
        <Container
          shape="square"
          fullHeight
          width="300px"
          style={{ overflow: "scroll" }}
        >
          <Typography variant="h2">This is a snackbar</Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          doloribus magni officia, recusandae pariatur quibusdam tenetur id. Sed
          cumque tempora deserunt id neque odio vero error fuga omnis, officia
          sit odit unde eligendi? Maxime sapiente praesentium velit quia veniam
          nam soluta quas! Ut, excepturi perferendis. Facere cum ut fugit nulla
          maxime explicabo nobis asperiores necessitatibus illo provident
          accusamus, architecto quibusdam totam maiores earum exercitationem
          ullam neque impedit culpa labore minus. Alias dicta maxime
          exercitationem nobis ipsam natus, porro et, asperiores recusandae
          omnis quisquam optio laborum quos velit esse voluptatum! Ducimus,
          quas! Fuga quaerat fugiat sequi dignissimos sapiente hic a, deserunt
          deleniti expedita repudiandae nihil ipsam eaque soluta, perferendis
          fugit itaque similique commodi voluptatum nam enim? Eos, voluptatibus
          beatae consequuntur libero reiciendis, nesciunt, accusamus a quas quo
          nisi veritatis. Est, quam? Doloribus necessitatibus perspiciatis
          corrupti eveniet assumenda cum iusto tempora autem temporibus sed
          rerum impedit, nisi at, quae magni nesciunt repudiandae molestias
          omnis fuga voluptates. Deserunt porro ducimus debitis in quibusdam
          enim quod laborum sint, animi aliquid sequi, temporibus asperiores
          aliquam recusandae ea dignissimos suscipit fuga ex quidem explicabo
          et! Dicta quidem quam fugit velit inventore ullam soluta sapiente
          consectetur neque officia iusto distinctio quod iste voluptate
          officiis, possimus deleniti nostrum!
        </Container>
      </Snackbar>
    </>
  );
};
