// Pure function: cube a single integer
export function squareRooted(x: number): number {
  return Math.sqrt(x);
}

// Map over a sequence
export function squareRoots(xs: number[]): number[] {
  return xs.map(squareRooted);
}