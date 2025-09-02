module.exports = function towelSort(matrix) {
  if (matrix) {
    return matrix
      .map((x, index) => {
        if ((index + 1) % 2 === 0) {
          return x.reverse();
        }
        return x;
      })
      .flat();
  }
  return [];
};
