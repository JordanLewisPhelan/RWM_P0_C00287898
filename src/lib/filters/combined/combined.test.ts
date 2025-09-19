import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined (mine → peer)', () => {
  it('basic sequence', () => {
    const input = [1, 3, 5, 7, 9];
    // Update expected for your two filters & agreed order
    const expected = [1, 0, 2, 1, 0];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {

    const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6]
    const expected = [4, 6, 14, 17, 26, 30, 40, 45, 56, 62]

    expect(combinedFilter(input)).toEqual(expected);
  });
});
