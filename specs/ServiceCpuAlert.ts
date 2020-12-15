import { CpuMonitor } from "./CpuMonitor";

export class ServiceCpuAlert {

    promises: Array<Promise<boolean>>;

    constructor(...cpusMonitor: CpuMonitor[]) {
        this.promises = new Array<Promise<boolean>>();
        for (let cpu of cpusMonitor) {
            this.promises.push(cpu.hasAlert());
        }
    }

    hasAlert(): Promise<boolean> {
        return Promise.all(this.promises).then((values) => {
            return values.reduce((previous, current) => { return previous || current; });
        });
    }
}
