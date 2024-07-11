const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');

module.exports = {
  preprocess: preprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter(),
    target: '#svelte',
  },
};
