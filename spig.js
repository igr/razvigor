const { Spig } = require('spignite');
const SpigConfig = require('spignite/lib/spig-config');

Spig.hello();

function findSectionMax(fileRef) {
  const chunks = fileRef.path.split('/');

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
}


// PAGES

Spig
  .on('/**/*.{md,njk}')

  ._('PREPARE')
  .pageMeta()
  .pageLinks()
  .tags()
  .do('find max', findSectionMax)

  ._('RENDER')
  .summary()
  .render()
  .applyTemplate()
  .htmlMinify()
;

// MISC RESOURCES

Spig
  .on('/**/*.js')

  ._('JS')
  .js();


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('PREPARE')
  .assetLinks()

  ._('IMAGES')
  .imageMinify()
;

Spig.run();
