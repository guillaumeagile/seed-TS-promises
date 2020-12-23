export class Temperature {
    
    constructor(v: number, u: TemperatureUnit) {
        this._valueK = v;
        this._temperatureUnit = u;
    }

    private _valueK: number;
    public get valueKelvin(): number {
        return this._valueK;
    }

    private _temperatureUnit: TemperatureUnit;
    Add(arg0: number): Temperature {
        return new Temperature(this._valueK + arg0, this._temperatureUnit);
    }
    
}

Temperature.prototype.valueOf = function() {
        return this._valueK;
     };

export enum TemperatureUnit {
    Celcius,
    Farheneit,
    Kelvin
}