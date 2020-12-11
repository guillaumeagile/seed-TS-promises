import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('My test suite Cpu Monitor', () => {
  it('My unit test async', async () => { // async keyword
    let serviceCpuAlert = new ServiceCpuAlert();
    serviceCpuAlert.
    const myNumber: Promise<number> = Promise.resolve(2); // Yeah, this is really TypeScript code!
    
    // Do not forget the 'await'
    await expect(myNumber).to.eventually.equal(2);
  });
});