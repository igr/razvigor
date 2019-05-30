"use strict";

module.exports = {

  sortBySection: (pages) => {
    const result = Object.values(pages);

    return result.filter(p => {
      const number = parseInt(p.src.split('/')[1], 10);
      return !isNaN(number);
    }).sort((a, b) => {
      const n1 = parseInt(a.src.split('/')[1], 10);
      const n2 = parseInt(b.src.split('/')[1], 10);

      if (n1 > n2) return 1;
      if (n1 < n2) return -1;
      return 0;
    });
  },

};
