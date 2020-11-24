# [svelte-preprocess#283](https://github.com/sveltejs/svelte-preprocess/issues/283)

Reproduction for [svelte-preprocess#283](https://github.com/sveltejs/svelte-preprocess/issues/283)

Steps:

1. Install Yarn 2
2. Clone this repo and `cd` into it
3. Run `yarn install`
4. Run `yarn build svelte-preprocess` to see the bug. Compare with `yarn build:sass-loader`, which works.
