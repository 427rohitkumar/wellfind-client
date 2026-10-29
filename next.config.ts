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
        source: "/patna/rajpull",
        destination: "/patna/rajpul",
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
        destination: "/patna/rajpul",
        permanent: true,
      },
      {
        source: "/rajpull",
        destination: "/patna/rajpul",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
