import * as chai from 'chai';
import 'mocha';
import * as Mesures from  '../src/Temperature';
import chaiAsPromised = require('chai-as-promised');
import { ServiceCpuAlert } from '../src/ServiceCpuAlert';
import { CpuMonitor } from '../src/CpuMonitor';

chai.use(chaiAsPromised);
const expect = chai.expect;


const THRESHOLD = new Mesures.Temperature(50, Mesures.TemperatureUnit.Celcius);


describe('THE test suite for Cpu Monitor', () => {
    it('Will alert when value is over threshold', async () => {
      
        let cpuMonitor = new CpuMonitor(THRESHOLD);
        cpuMonitor.setValue(THRESHOLD.Add(1));
        let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
        const result: Promise<boolean> = serviceCpuAlert.hasAlert()

        await expect(result).to.eventually.equal(true);
    }),

        it('Will not alert when value is under threshold', async () => {
            let cpuMonitor = new CpuMonitor(THRESHOLD);
            cpuMonitor.setValue(THRESHOLD.Add( - 1));
            let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor);
            const result: Promise<boolean> = serviceCpuAlert.hasAlert()

            await expect(result).to.eventually.equal(false);
        })


    it('Two Cpu Monitors will alert when at least one value is over threshold', async () => {
        let cpuMonitor = new CpuMonitor(THRESHOLD);
        cpuMonitor.setValue(THRESHOLD.Add( - 1));

        let cpuMonitor2 = new CpuMonitor(THRESHOLD);
        cpuMonitor2.setValue(THRESHOLD.Add( + 1));

        let serviceCpuAlert = new ServiceCpuAlert(cpuMonitor, cpuMonitor2);

        const result: Promise<boolean> = serviceCpuAlert.hasAlert()

        await expect(result).to.eventually.equal(true);
    })

});



