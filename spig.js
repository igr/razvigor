const { Spig, SpigSite } = require('spignite');

Spig.hello();

function findSectionMax(fileRef) {
  const chunks = fileRef.path.split('/');

  if (chunks.length > 2) {
    // section
    if (!SpigSite.max) {
      SpigSite.max = 0;
    }
    const pageNo = parseInt(chunks[1], 10);
    if (pageNo > SpigSite.max) {
      SpigSite.max = pageNo;
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
