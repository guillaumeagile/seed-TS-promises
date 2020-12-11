import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('My test suite Cpu Monitor', () => {
  it('My unit test async', async () => { 
    let cpuMonitor = new CpuMonitor();
    let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
    const result : Promise<boolean> = serviceCpuAlert.hasAlert()
        
    await expect(result).to.eventually.equal(true);
  });
});

class CpuMonitor {

}

class ServiceCpuAlert {
  hasAlert(): Promise<boolean> {
    return  Promise.resolve(true);
  }
  
  constructor(cpuMon: CpuMonitor ) {
  
    
  }
}