import { CpuMonitor } from "./CpuMonitor";
import IExposeAlerts from "./IExposeAlert";

export class ServiceCpuAlert {

    private promises: Array<Promise<boolean>>;

    constructor(...cpusMonitor: IExposeAlerts[]) {
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
