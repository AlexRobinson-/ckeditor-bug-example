module.exports = function babelConfig(api) {
  api.cache(false)

  return {
    presets: [
      '@babel/react',
      '@babel/typescript',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ],
    env: {
      test: {
        plugins: []
      }
    }
  }
}
