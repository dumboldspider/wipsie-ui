export const serviceLinks = {
  auth: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}auth.wipsie.com`
    : "http://localhost:5001",

  dashboard: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}dashboard.wipsie.com`
    : "http://localhost:5002",

  main: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}wipsie.com`
    : "http://localhost:5003",

  shop: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}shop.wipsie.com`
    : "http://localhost:5004",

  library: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}library.wipsie.com`
    : "http://localhost:5005",

  status: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}status.wipsie.com`
    : "http://localhost:5006",
  help: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}help.wipsie.com`
    : "http://localhost:5007",

  docs: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}docs.wipsie.com`
    : "http://localhost:5008",

  admin: process.env.NEXT_PUBLIC_ENV_URL_PREFIX
    ? `${process.env.NEXT_PUBLIC_ENV_URL_PREFIX}admin.wipsie.com`
    : "http://localhost:5009",
};
