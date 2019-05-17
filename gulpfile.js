"use strict";

const Spig = require('./spig/spig');
const SpigConfig = require('./spig/spig-config');
require('require-dir')('./spig/tasks');


const findSectionMax = (page) => {
  const chunks = page.path.split('/');
  if (chunks.length > 2) {
    // section
    const sectionName = chunks[1];
    if (!SpigConfig.site.max) {
      SpigConfig.site.max = {};
    }
    let val = SpigConfig.site.max[sectionName];
    const pageNo = parseInt(chunks[2], 10);
    if (!val) {
      val = pageNo;
    } else {
      if (pageNo > val) {
        val = pageNo;
      }
    }
    SpigConfig.site.max[sectionName] = val;
  }
};


// PAGES

Spig
  .on('/**/*.{md,njk}')

  ._("PREPARE")
  .pageCommon()
  .collect('tags')
  .readingTime()
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
