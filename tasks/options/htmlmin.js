/*global module*/
'use strict';

module.exports = {
  dist: {
    options: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeAttributeQuotes: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      useShortDoctype: true
    },
    files: [{
      expand: true,
      cwd: '<%= config.app %>',
      src: '{,*/}*.html',
      dest: '<%= config.dist %>'
    }]
  }
};
