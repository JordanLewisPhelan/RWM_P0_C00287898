import { describe, it, expect } from 'vitest';
import { squareRoots } from './squareRoot';

describe('Cube filter', () => {
  it('squareRoots a sequence', () => {
    const input = [16, 36, 64, 144, 256];
    const expected = [4, 6, 8, 12, 16];
    expect(squareRoots(input)).toEqual(expected);
  });
  it('Failure Check', () => {
    const input = [16, 37, 49, 72, 9, 999];
    const expected = [1, 4.52, 7, 14, 3, 20];
    expect(squareRoots(input)).toEqual(expected); 
  });
});