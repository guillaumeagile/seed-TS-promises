import IExposeAlerts from "./IExposeAlert";
import { Temperature, TemperatureUnit } from "./Temperature";

async function http(
    request: RequestInfo
): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}

export default class ConnectedCpuMonitor implements IExposeAlerts {
    private _threshold: Temperature;

    constructor(threshold: Temperature) {
        this._threshold = threshold;
    }

    getValue(): Promise<Temperature>
    {
        return http(
            "https://jsonplaceholder.typicode.com/todos/99"
        ).then( res=> {
            return new Temperature( res, TemperatureUnit.Celcius);
            } );
    }

    //TODO: refactor this duplicated code (with CpuMonitor) 
    // and restore SRP (children class responsible for getting the value, base class responsible for the business, in order to avoid Anemic Object again?)
    
    public get hasAlert(): Promise<boolean> {
        return this.getValue().then( (value) => { return  (value.valueKelvin > this._threshold.valueKelvin); });        
    }
}