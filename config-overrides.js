const path = require('path');
const { override, addWebpackAlias, overrideDevServer, addWebpackResolve } = require('customize-cra');

const disableBrowserOpen = () => (config) => {
  config.open = false;
  return config;
};

module.exports = {
  webpack: override(
    addWebpackAlias({
      '~': path.resolve(__dirname, 'src'),
      '~comp': path.resolve(__dirname, 'src/components'),
    }),
    addWebpackResolve({
      fallback: {
        "path": require.resolve("path-browserify"),
      }
    })
  ),
  devServer: overrideDevServer(
    disableBrowserOpen()
  ),
};
