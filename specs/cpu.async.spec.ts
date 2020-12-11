import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const THRESHOLD = 50;

describe('My test suite Cpu Monitor', () => {
  it('My unit test async', async () => { 
    let cpuMonitor = new CpuMonitor(THRESHOLD);
    cpuMonitor.setValue(THRESHOLD+1);
    let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
    const result : Promise<boolean> = serviceCpuAlert.hasAlert()
        
    await expect(result).to.eventually.equal(true);
  }),

  it('should not alert', async() => {
    let cpuMonitor = new CpuMonitor(THRESHOLD);
    cpuMonitor.setValue(THRESHOLD-1);
    let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
    const result : Promise<boolean> = serviceCpuAlert.hasAlert()
        
    await expect(result).to.eventually.equal(false);
  })

});



class CpuMonitor {
  _threshold : number;
  
  _value : number;
  
  constructor(threshold : number) {
    this._threshold = threshold;
  }

  setValue(value: number) {
    this._value = value;
  }
  
}

class ServiceCpuAlert {
  hasAlert(): Promise<boolean> {
    return  Promise.resolve(true);
  }
  
  constructor(cpuMon: CpuMonitor ) {
    
  }
}