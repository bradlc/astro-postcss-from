function plugin() {
  return {
    postcssPlugin: 'plugin',
    AtRule: {
      from(node, { result, Declaration }) {
        node.replaceWith(new Declaration({ prop: 'content', value: `"${result.opts.from}"` }))
      },
    },
  }
}

plugin.postcss = true

module.exports = {
  plugins: [plugin],
}
