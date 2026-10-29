import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  cacheComponents: true,
  partialPrefetching: true,
  skipTrailingSlashRedirect: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/home-tuition/patna/",
        destination: "/patna",
        permanent: true,
      },
      {
        source: "/home-tuition/patna",
        destination: "/patna",
        permanent: true,
      },
      {
        source: "/home-tuition/patna/kankarbagh",
        destination: "/patna/kankarbagh",
        permanent: true,
      },
      {
        source: "/home-tuition/patna/danapur",
        destination: "/patna/danapur",
        permanent: true,
      },
      {
        source: "/patna/rajpull",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/patna/rajpul",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/boring-road",
        destination: "/patna/boring-road",
        permanent: true,
      },
      {
        source: "/kankarbagh",
        destination: "/patna/kankarbagh",
        permanent: true,
      },
      {
        source: "/rajendra-nagar",
        destination: "/patna/rajendra-nagar",
        permanent: true,
      },
      {
        source: "/bailey-road",
        destination: "/patna/bailey-road",
        permanent: true,
      },
      {
        source: "/patliputra",
        destination: "/patna/patliputra",
        permanent: true,
      },
      {
        source: "/danapur",
        destination: "/patna/danapur",
        permanent: true,
      },
      {
        source: "/kadamkuan",
        destination: "/patna/kadamkuan",
        permanent: true,
      },
      {
        source: "/khagaul",
        destination: "/patna/khagaul",
        permanent: true,
      },
      {
        source: "/phulwari-sharif",
        destination: "/patna/phulwari-sharif",
        permanent: true,
      },
      {
        source: "/rajpul",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/rajpull",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/rajapull",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/home-tuition/patna/rajpul",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/home-tuition/patna/rajpull",
        destination: "/patna/rajapull",
        permanent: true,
      },
      {
        source: "/home-tuition/patna/rajapull",
        destination: "/patna/rajapull",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
