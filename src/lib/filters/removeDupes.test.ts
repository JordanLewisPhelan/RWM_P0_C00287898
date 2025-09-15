import { describe, it, expect } from 'vitest';
import { dupeCheck } from './removeDupes';

describe('Cube filter', () => {
  it('Duplicate check a sequence', () => {
    const input = [16, 36, 64, 144, 256];
    const expected = [4, 6, 8, 12, 16];
    expect(dupeCheck(input)).toEqual(expected);
  });
  it('Failure Check', () => {
    const input = [16, 37, 49, 72, 9, 999];
    const expected = [1, 4.52, 7, 14, 3, 20];
    expect(dupeCheck(input)).toEqual(expected); 
  });
});