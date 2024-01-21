import assert from 'assert';
import { describe, it } from 'node:test';

describe('when receives two number and a math operation', () => {
  it('it should apply this math operation', () => {
    const sum = (a, b) => a + b;
    assert(sum(1, 2) === 3);
  });
});
