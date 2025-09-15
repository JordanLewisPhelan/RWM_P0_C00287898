var list = Array <number>();

// Pure function: cube a single integer
export function dupeDetector(x: number): number {
  
  if(!list.includes(x))
  {
    // if number isn't in list, add number
    list.push(x);
    return x;
  }

  // else nothing
  return 0;
}

// Map over a sequence
export function dupeCheck(xs: number[]): number[] {
  list = xs.map(dupeDetector)
  return list;
}