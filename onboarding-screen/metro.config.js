const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const { config } = await getDefaultConfig();

  return {
    ...config,
    transformer: {
      assetPlugins: ["react-native-svg"],
      svgFileTransformers: ["react-native-svg-transformer"],
    },
  };
})();
