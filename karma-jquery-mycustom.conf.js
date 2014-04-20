var angularFiles = require('./myAngularFiles');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS: jQuery', logFile: 'karma-jquery.log'});

  config.set({
    files: angularFiles.mergeFilesFor('karmaCusJquery').concat({
      pattern: "test/fixtures/**/*.html",
      served: true,
      watched: true,
      included: false
    }),
    exclude: angularFiles.mergeFilesFor('karmaJqueryExclude'),

    junitReporter: {
      outputFile: 'test_out/jquery.xml',
      suite: 'jQuery'
    }
  });
};
