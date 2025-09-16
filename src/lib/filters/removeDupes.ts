
// Map over a sequence to check for duplicates
export function dupeCheck(xs: number[]): number[] 
{
  return xs.filter((value, index) => xs.indexOf(value) === index);
}