export class Temperature {
        
    constructor(v: number, u: TemperatureUnit) {        
        this._temperatureUnit = u;
        if (u === TemperatureUnit.Celcius)
        this._valueK = v + 273.15 ;
        else
            this._valueK = v;
        if (this._valueK <0 )
            throw new Error('invalid value');
    }

    private _valueK: number;
    public get valueKelvin(): number {
        return this._valueK;
    }

    public get valueCelcius(): number {
        return this._valueK -  273.15;
    }

    private _temperatureUnit: TemperatureUnit;
    Add(arg0: number): Temperature {
        return new Temperature(this._valueK + arg0, TemperatureUnit.Kelvin);
    }
    
}

Temperature.prototype.valueOf = function() {
        return this._valueK;
     };

export enum TemperatureUnit {
    Celcius,
    Kelvin
}