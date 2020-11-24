const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  entry: "./foo.scss",
  resolve: {
    extensions: [".scss"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [require.resolve("css-loader"), require.resolve("sass-loader")],
      },
    ],
  },
};
