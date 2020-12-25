import { CpuMonitor } from "./CpuMonitor";

export class ServiceCpuAlert {

    private promises: Array<Promise<boolean>>;

    constructor(...cpusMonitor: CpuMonitor[]) {
        this.promises = new Array<Promise<boolean>>();
        for (let cpu of cpusMonitor) {
            this.promises.push(cpu.hasAlert);
        }
    }

    public get hasAlert(): Promise<boolean> {
        return Promise.all(this.promises).then((values) => {
            return values.reduce((previous, current) => { return previous || current; });
        });
    }
}
