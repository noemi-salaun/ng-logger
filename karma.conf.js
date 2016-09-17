// #docregion
module.exports = function(config) {

  var appBase    = 'src/';       // transpiled app JS and map files
  var appSrcBase = 'src/';       // app source TS files

  var testBase    = 'test/';       // transpiled test JS and map files
  var testSrcBase = 'test/';       // test source TS files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',
      'node_modules/reflect-metadata/Reflect.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      {pattern: appBase + '**/*.js', included: false, watched: true},
      {pattern: testBase + '**/*.js', included: false, watched: true},

      // Paths for debugging with source maps in dev tools
      {pattern: appSrcBase + '**/*.ts', included: false, watched: false},
      {pattern: appBase + '**/*.js.map', included: false, watched: false},
      {pattern: testSrcBase + '**/*.ts', included: false, watched: false},
      {pattern: testBase + '**/*.js.map', included: false, watched: false}
    ],

    exclude: [],
    preprocessors: {},
    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
