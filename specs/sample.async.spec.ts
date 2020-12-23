import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Sample test suite async', () => {
  it('My unit test async', async () => { // async keyword
    const myNumber: Promise<number> = Promise.resolve(2); // Yeah, this is really TypeScript code!
    
    // Do not forget the 'await'
    await expect(myNumber).to.eventually.equal(2);
  });
});