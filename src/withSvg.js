const withSvg = (svgrOpts = {}, nextConfig = {}, nextComposePlugins = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: svgrOpts }],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

module.exports = withSvg;
