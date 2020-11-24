const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  entry: "./foo.svelte",
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: require.resolve("svelte-loader"),
          options: {
            preprocess: sveltePreprocess(),
          },
        },
      },
    ],
  },
};
