import React from "react";

import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Spacing,
  Typography,
  useTheme,
} from "@wipsie/ui";
import { StagingEnvironmentWarning } from "../../components/warnings/StagingEnvironmentWarning";
import { footerSocialLinks } from "../../configs/footerSocialLinks";
import { WipsieLogo } from "../../components/WipsieLogo";
import { footerLinks } from "../../configs/footerLinks";

export type DefaultFooterProps = {
  linkComponent?: any;
};

export function DefaultFooter({ linkComponent = Link }: DefaultFooterProps) {
  const theme = useTheme();

  const LinkComponent = linkComponent;

  return (
    <>
      <Box
        display="flex"
        direction="column"
        align="center"
        justify="center"
        width="100%"
        backgroundColor="background"
        p={2}
        pt={4}
        pb={4}
      >
        <Flex
          display="flex"
          direction="column"
          align="center"
          justify="center"
          width="100%"
          maxWidth="1200px"
        >
          <WipsieLogo />

          <Spacing height={4} />

          <StagingEnvironmentWarning />

          <Spacing height={4} />

          <Flex
            display="flex"
            direction="row"
            align="center"
            justify="center"
            width="100%"
            maxWidth="1200px"
          >
            {footerSocialLinks.map((link, index) => (
              <>
                <LinkComponent
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    size="xlarge"
                    backgroundColor={theme.palette.subtext}
                  >
                    {link.icon}
                  </IconButton>
                </LinkComponent>
                {index !== footerSocialLinks.length - 1 && (
                  <Spacing width={2} />
                )}
              </>
            ))}
          </Flex>

          <Spacing height={5} />

          <Flex
            display="flex"
            direction={{ xs: "column", md: "row" }}
            align="center"
            justify="center"
            width="100%"
            maxWidth="1200px"
          >
            {footerLinks.map((link, index) => (
              <>
                <LinkComponent
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  color={theme.palette.subtext}
                >
                  {link.text}
                </LinkComponent>
                {index !== footerLinks.length - 1 && <Spacing width={2} />}
              </>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Container
        backgroundColor={theme.palette.shade}
        display="flex"
        align="center"
        fullWidth
        shape="square"
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Wipsie.com - Operated by DumbOldSpider
          LLC - All Rights Reserved.
        </Typography>
      </Container>
    </>
  );
}
