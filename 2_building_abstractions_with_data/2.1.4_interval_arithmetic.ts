// Ex. 2.7

function make_interval(x, y) {
  return pair(x, y);
}

// Ex. 2.8
function sub_interval(x, y) {
  return make_interval(
    lower_bound(x) - lower_bound(y),
    upper_bound(x) - upper_bound(y)
  );
}

// Ex.2.12

function lower_bound(i) {
  return head(i);
}
function upper_bound(i) {
  return tail(i);
}

function center(i: Pair) {
  return (lower_bound(i) + upper_bound(i)) / 2;
}

function make_center_percent(center: number, tolerance: number) {
  const toleranceAsNumber = (center / 100) * tolerance;
  const upper = center + toleranceAsNumber;
  const lower = center - toleranceAsNumber;
  return make_pair(upper, lower);
}
