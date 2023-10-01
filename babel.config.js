module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@bablel/plugin-proposal-export-namespace-from",
      "react-native-reanimated-plugin",
    ],
  };
};
