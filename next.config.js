/** @type {import('next').NextConfig} */

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
  //   webpack(config) {
  //     config.resolve.fallback = {
  //       // if you miss it, all the other options in fallback, specified
  //       // by next.js will be dropped.
  //       ...config.resolve.fallback,

  //       fs: false, // the solution
  //     };

  //     return config;
  //   },
};
