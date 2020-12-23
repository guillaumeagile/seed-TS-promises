import { expect } from 'chai';
import 'mocha';
import { Temperature, TemperatureUnit } from '../src/Temperature';

describe('Sync test suite', () => {

  it('Temparature cannot be lower than 0 degree K', () => {
    let sut: Temperature ; 
    expect( ()=>{sut = new Temperature(-1, TemperatureUnit.Kelvin); }  ).to.Throw("invalid value");
    
  });

  it('Temparature can be declared in Celcius', () => {
    let sut: Temperature = new Temperature(0, TemperatureUnit.Celcius);; 
    expect(  sut.valueKelvin).to.equal(273.15);
    
  });

  it('Temparature in celcius cannot be lower than 0 degree K', () => {
    let sut: Temperature ; 
    expect( ()=>{sut = new Temperature(-274, TemperatureUnit.Celcius); }  ).to.Throw("invalid value");
    
  });

  it('Temparature can be increased correctly in Celcius', () => {
    let sut: Temperature = new Temperature(0, TemperatureUnit.Celcius);
    let res = sut.Add(1);
    expect(  res.valueKelvin).to.equal(274.15);
    expect(  res.valueCelcius).to.equal(1);

     // expect(  res === 274.15).to.be.true;   doesn't work in JS or TS
     // on peut contourner le probleme avec une lib comme LodAsh
     // lire  https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/

     //on peut faire sale avec ToString()
     let res2: Temperature = new Temperature(1, TemperatureUnit.Celcius);
     expect(  res.toString()).to.equal(res2.toString());  //toString utilise valueOf
    
  });


});