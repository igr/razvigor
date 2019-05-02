"use strict";

module.exports = {

  sortBySection: (pages) => {
    const result = Object.values(pages);

    result.sort((a, b) => {
      const n1 = parseInt(a.src.split('/')[2], 10);
      const n2 = parseInt(b.src.split('/')[2], 10);

      if (n1 > n2) return 1;
      if (n1 < n2) return -1;
      return 0;
    });

    return result;
  },

};
