Note on this kata:

now, concerns are separated, and an interface had emerged to be able to use different type of monitors, without changing the service.
Thus it's easier to test the service with disconnected monitor(s).

One question remains:
who decide to create the monitors?
It should be a Injection of Dependance.

As it is implemented now, the ServiceCpuAlert receives an array of IExposeAlerts.
But who's in charge to create it
It is done by the test, because it's a unit test.
But for a code in production, it could be, for example, a persistance layer that is gonna look for records of Monitors is a DB.
Or it could be a directory service that knows all the Monitors that has been registered.

To put it all together, we would need another service, who has the responsibility to ask for a list of Monitors and pass it to the ServiceAlert.
The ServiceAlert will remain unchanged, as it is not its responsibility to go and find for a list of Monitors.


------

Based on a Seed for Test Driven Development with Typescript 4 (https://github.com/Microsoft/TypeScript) Chai and Node.
Mocha and Jest are used for testing.

Installation:
to grad all libs:
npm i  


HOWEVER it's recommended to install TypeScript globally:
```
npm i typescript -g
```
and then other necessary librairies
```
npm i chai -D
npm i mocha -D
npm i @types/chai -D
npm i @types/mocha -D
npm i ts-mocha -D
npm i typescript -D
```

Run:
```
npm run build
npm run test
```

This would watch source and test files for changes and execute the tests.

-------------

This session has enabled Promises within Chai tests :)
Taken and improved from https://gist.github.com/ComFreek/712a7d1488326c30f3746dd1530819e1


-------------

Memento for kata

- whereby 
- timer : https://mobti.me/Kata?

- git commands 

```
git co --track origin/cpuMonitorKata
```

  
