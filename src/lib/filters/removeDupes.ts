var list = Array <number>();

// Pure function: cube a single integer
export function dupeDetector(x: number): number {
  // Add number
  list.push(x);
  if(list.includes(x))
  {
    // if number is in list, remove number
    list.pop();
  }
  return x;
}

// Map over a sequence
export function dupeCheck(xs: number[]): number[] {

  return xs.map(dupeDetector);
}