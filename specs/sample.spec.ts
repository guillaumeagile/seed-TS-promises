import { expect } from 'chai';
import 'mocha';

describe('My test suite', () => {
  it('My unit test', () => {
    const myNumber: number = 2; // Yeah, this is really TypeScript code!
    expect(myNumber).to.equal(2);
  });
});