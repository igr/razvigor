"use strict";

const Spig = require('./spig/spig');
const SpigConfig = require('./spig/spig-config');
require('require-dir')('./spig/tasks');


const findSectionMax = (page) => {
  const chunks = page.path.split('/');
  if (chunks.length > 2) {
    // section
    if (!SpigConfig.site.max) {
      SpigConfig.site.max = 0;
    }
    const pageNo = parseInt(chunks[1], 10);
    if (pageNo > SpigConfig.site.max) {
      SpigConfig.site.max = pageNo;
    }
  }
};


// PAGES

Spig
  .on('/**/*.{md,njk}')

  ._("PREPARE")
  .pageCommon()
  .collect('tags')
  .use(findSectionMax)

  ._("RENDER")
  .summary()
  .render()
  .applyTemplate()
  .htmlMinify()
;

// MISC RESOURCES

Spig
  .on('/**/*.js')

  ._("PREPARE")
  .assetCommon();


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._("PREPARE")
  .assetCommon()

  ._("ASSETS")
  .imageMinify()
;
