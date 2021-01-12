const AbsoluteZeroInCelcius = 273.15;
export class Temperature {
        
    constructor(v: number, u: TemperatureUnit) {        
        this._temperatureUnit = u;
        this._valueK = v;
        if (u === TemperatureUnit.Celcius)
            this._valueK +=  AbsoluteZeroInCelcius ;        
           
        if (this._valueK <0 )
            throw new Error('invalid value');
            // heeeemmmmm... I'm not a big fan of this
            // constructor raising an exception??? weird!
            // I should have used a MayBe Monad somewhere, in a factory I guess
            // and making this constructor accessible only to this factory that will return a Maybe instead of crashing brutally
            // read:  https://medium.com/@KevinBGreene/maybe-null-and-the-story-of-handling-empty-values-994717fde7a0
            // for those who prefers C# (like me), I recommend this library  https://github.com/vkhorikov/CSharpFunctionalExtensions/tree/master/CSharpFunctionalExtensions.Tests/MaybeTests
    }

    private _valueK: number;
    public get valueKelvin(): number {
        return this._valueK;
    }

    public get valueCelcius(): number {
        return this._valueK -  AbsoluteZeroInCelcius;
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