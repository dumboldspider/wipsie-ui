// Generated with util/create-component.js
import React from "react";
import { InfinityLoader } from "./InfinityLoader";
import { Container } from "../Container";
import { Loading } from "../Loading";

export default {
  title: "Prototypes/InfinityLoader",
};

const limit = 10;

export const WithBar = () => (
  <>
    <InfinityLoader
      totalPages={999}
      renderItem={(item) => (
        <Container backgroundColor="shade" mb={2}>
          {item.title}
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
