// ex 1.2
5 + 4 + (2 - (3 - 6 + 4 / 5)) / (3 * (6 - 2) * (2 - 7));

// 1.3
const sumOfLargestSquare = (a: number, b: number, c: number) => {
  a > b ? (a > c ? (b > c ? a * b : a * c) : b * c) : a > c ? a * b : b * c;
};

// 1.6
