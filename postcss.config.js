module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-properties': false
      }
    },
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true
      }]
    } : false
  }
};
