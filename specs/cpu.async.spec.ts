import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

const THRESHOLD = 50;

describe('My test suite Cpu Monitor', () => {
    it('Will alert when value is over threshold', async () => {
        let cpuMonitor = new CpuMonitor(THRESHOLD);
        cpuMonitor.setValue(THRESHOLD + 1);
        let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
        const result: Promise<boolean> = serviceCpuAlert.hasAlert()

        await expect(result).to.eventually.equal(true);
    }),

        it('Will not alert when value is under threshold', async () => {
            let cpuMonitor = new CpuMonitor(THRESHOLD);
            cpuMonitor.setValue(THRESHOLD - 1);
            let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
            const result: Promise<boolean> = serviceCpuAlert.hasAlert()

            await expect(result).to.eventually.equal(false);
        })
    /* TODO: next step create a test with two cpuMonitors */
    /* that could change the cpuMonitor design */
    /* cpuMonitor could return a promise */
    /* so serviceCpuAlert should have SRP to resolve all promises from cpuMonitor*/

    it('Two Cpu Monitors will alert when at least one value is over threshold', async () => {
        let cpuMonitor = new CpuMonitor(THRESHOLD);
        cpuMonitor.setValue(THRESHOLD - 1);

        let cpuMonitor2 = new CpuMonitor(THRESHOLD);
        cpuMonitor2.setValue(THRESHOLD + 1);

        let serviceCpuAlert = new ServiceCpuAlert( cpuMonitor, cpuMonitor2 );

        const result: Promise<boolean> = serviceCpuAlert.hasAlert()

        await expect(result).to.eventually.equal(true);
    })

});


class CpuMonitor {
    private readonly _threshold: number;
    private _value: number;

    constructor(threshold: number) {
        this._threshold = threshold;
    }

    setValue(value: number) {
        this._value = value;
    }

    public hasAlert() : boolean {
        return this._value > this._threshold;
    }

}

class ServiceCpuAlert {

    _cpuMonitor : CpuMonitor;
    _cpusMonitor : CpuMonitor[];

    constructor(...cpusMonitor: CpuMonitor[]) {
        this._cpuMonitor = cpusMonitor[0];
        this._cpusMonitor = cpusMonitor;
    }

    hasAlert(): Promise<boolean> {
        for (let cpu of this._cpusMonitor) {
            if (cpu.hasAlert()) {
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    }


}