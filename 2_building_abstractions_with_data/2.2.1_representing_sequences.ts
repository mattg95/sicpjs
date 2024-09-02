last_pair(list(23, 72, 149, 34));

function last_pair(el: null | number | array) {
  return isNull(el) ? el : last_pair(el.slice(el[1], el.length - 1));
}

function last_pair(items) {
  return is_null(tail(items)) ? items : last_pair(tail(items));
}

function reverse(items) {
  return is_null(tail(items)) ? items : last_pair(tail(items));
}
