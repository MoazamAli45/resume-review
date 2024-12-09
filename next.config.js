// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         net: false,
//         dns: false,
//         tls: false,
//         fs: false,
//         request: false,
//       };
//     }
//     config.module.rules.push({
//       test: /\.node/,
//       use: "raw-loader",
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = nextConfig;
