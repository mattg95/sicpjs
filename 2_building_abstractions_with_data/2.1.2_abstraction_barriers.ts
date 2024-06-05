// Ex. 2.2
type point = {
  x: number;
  y: number;
};

type segment = {
  start: point;
  end: point;
};

const make_segment = (start: point, end: point): segment => {
  return { start, end };
};

const start_segment = (segment: segment): point => {
  return segment.start;
};

const end_segment = (segment: segment): point => {
  return segment.end;
};

const make_point = (x: number, y: number): point => {
  return { x, y };
};

const point = make_point(1, 2);

const x_point = (point: point) => {
  return point.x;
};

const y_point = (point: point) => {
  return point.y;
};

const midpoint_segment = (segment: segment): point => {
  const segment_start = start_segment(segment);
  const segment_end = end_segment(segment);

  const x_midpoint = x_point(segment_start) / x_point(segment_end);
  const y_midpoint = y_point(segment_start) / y_point(segment_end);

  return make_point(x_midpoint, y_midpoint);
};

// Ex 2.3

type rectangle = {
  topRight: point;
  topLeft: point;
  bottomRight: point;
  bottomLeft: point;
};

const make_rectangle = (
  topRight: point,
  topLeft: point,
  bottomRight: point,
  bottomLeft: point
): rectangle => {
  return { topRight, topLeft, bottomRight, bottomLeft };
};

const segment_length = (segment: segment): number => {
  const segment_start = start_segment(segment);
  const segment_end = end_segment(segment);

  return x_point(segment_start) - x_point(segment_end);
};

const segment_height = (segment: segment): number => {
  const segment_start = start_segment(segment);
  const segment_end = end_segment(segment);

  return y_point(segment_start) - y_point(segment_end);
};

const get_rectangle_perimeter = ({
  topLeft,
  bottomLeft,
  bottomRight,
}: rectangle): number => {
  const length = segment_length(make_segment(bottomLeft, bottomRight));

  const height = segment_height(make_segment(bottomLeft, topLeft));

  return length * 2 + height * 2;
};

const get_recatangle_area = ({
  topLeft,
  bottomLeft,
  bottomRight,
}: rectangle) => {
  const length = segment_length(make_segment(bottomLeft, bottomRight));

  const height = segment_height(make_segment(bottomLeft, topLeft));
  return length * height;
};

const make_rectangle_alt = (
  top: segment,
  bottom: segment,
  left: segment,
  right: segment
) => {
  return { left, right, top, bottom };
};
