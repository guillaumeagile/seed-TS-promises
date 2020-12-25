import IExposeAlerts from "./IExposeAlert";
import { Temperature, TemperatureUnit } from "./Temperature";
//import * as fetch from "../node_modules/node-fetch/";

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


    public get hasAlert(): Promise<boolean> {
        return this.getValue().then( (value) => { return  (value.valueKelvin > this._threshold.valueKelvin); });        
    }
}