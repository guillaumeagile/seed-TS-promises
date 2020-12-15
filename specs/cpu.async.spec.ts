import * as chai from 'chai';
import 'mocha';

import chaiAsPromised = require('chai-as-promised');
import { ServiceCpuAlert } from './ServiceCpuAlert';
import { CpuMonitor } from './CpuMonitor';

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

        let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor, cpuMonitor2);

        const result: Promise<boolean> = serviceCpuAlert.hasAlert()

        await expect(result).to.eventually.equal(true);
    })

});



