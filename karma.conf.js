module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    reporters: ['mocha'],
    basePath: './',
    preprocessors: {
      'test/browser/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', {}]
      ]
    },

    files: [
      'test/browser/**/*.js'
    ],
    browsers: [
      'Chrome'
    ],
    singleRun: true,
    autoRun: false
  })
}
