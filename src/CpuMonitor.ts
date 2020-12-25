import { Temperature } from "./Temperature";


export class CpuMonitor {
    private readonly _threshold: Temperature;
    private _value: Temperature;

    constructor(threshold: Temperature) {
        this._threshold = threshold;
    }

    setValue(value: Temperature) {
        this._value = value;
    }

    public get hasAlert(): Promise<boolean> {
        return Promise.resolve(this._value > this._threshold);
    }

}
