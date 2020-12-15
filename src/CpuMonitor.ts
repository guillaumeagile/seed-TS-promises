

export class CpuMonitor {
    private readonly _threshold: number;
    private _value: number;

    constructor(threshold: number) {
        this._threshold = threshold;
    }

    setValue(value: number) {
        this._value = value;
    }

    public hasAlert(): Promise<boolean> {
        return Promise.resolve(this._value > this._threshold);
    }

}
