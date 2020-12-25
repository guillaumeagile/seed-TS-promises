import IExposeAlerts from "./IExposeAlert";
import { Temperature } from "./Temperature";


export class CpuMonitor implements IExposeAlerts  {
    private readonly _threshold: Temperature;
    private _value: Temperature;

    constructor(threshold: Temperature) {
        this._threshold = threshold;
    }

    setValue(value: Temperature) {
        this._value = value;
    }

    getValue(): Promise<Temperature>
    {
        return Promise.resolve(this._value);
    }
 
    public get hasAlert(): Promise<boolean> {
        return this.getValue().then( (value) => { return  (value.valueKelvin > this._threshold.valueKelvin); });        
    }

}
