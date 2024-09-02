export function pair(x, y) {
  return function (selector) {
    return selector(x, y);
  };
}

const t = pair(5, 4);
