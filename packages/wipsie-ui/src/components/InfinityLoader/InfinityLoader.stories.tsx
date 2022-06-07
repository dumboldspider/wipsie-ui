// Generated with util/create-component.js
import React from "react";
import { InfinityLoader } from "./InfinityLoader";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { Grid } from "../Grid";
import { Button } from "../Button";

export default {
  title: "Prototypes/InfinityLoader",
};

const limit = 10;

export const WithBar = () => (
  <>
    <InfinityLoader
      totalPages={999}
      renderItem={(item, index) => (
        <Container backgroundColor="shade" mb={2}>
          {/* {item.title} */}
          {index}
        </Container>
      )}
      loadingComponent={<Loading />}
      getData={(nextPage) => {
        return new Promise(async (resolve, reject) => {
          try {
            const data = await fetch(
              `https://jsonplaceholder.typicode.com/photos?_page=${nextPage}&_limit=${limit}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const json = await data.json();

            resolve(json);
          } catch (error) {
            reject(error);
          }
        });
      }}
    />
  </>
);

export const CustomGrid = () => {
  const [variable, setVariable] = React.useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setVariable(!variable)}>change</Button>

      <InfinityLoader
        totalPages={999}
        renderParent={(props) => (
          <Grid container style={{ backgroundColor: "red" }}>
            {props.children}
          </Grid>
        )}
        renderItem={(item, index) => (
          <Grid item xs={6}>
            <Container backgroundColor={variable ? "primary" : "shade"} mb={2}>
              {item.title}
              {index}
            </Container>
          </Grid>
        )}
        dependencies={[variable]}
        loadingComponent={<Loading />}
        loadingStyles={{ backgroundColor: "green", padding: 20 }}
        getData={(nextPage) => {
          return new Promise(async (resolve, reject) => {
            try {
              const data = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_page=${nextPage}&_limit=${limit}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const json = await data.json();

              resolve(json);
            } catch (error) {
              reject(error);
            }
          });
        }}
      />
    </>
  );
};
