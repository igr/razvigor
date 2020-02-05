"use strict";

const sections = require('./filters/sections');

module.exports = nunjucksEnv => {
  nunjucksEnv
    .addFilter('sortBySection', sections.sortBySection)
  ;
};
