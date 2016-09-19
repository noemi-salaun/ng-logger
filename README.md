# ng2-logger

[![Build Status](https://travis-ci.org/noemi-salaun/ng2-logger.svg?branch=master)](https://travis-ci.org/noemi-salaun/ng2-logger)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/noemi-salaun/ng2-logger/blob/master/LICENSE)

**ng2-logger** is a simple Angular2 logger service that responds to two needs :

 - A log level system to be able to disable certain calls as needed. *We do not want to see our debug trace on production.*
 - A logger that keeps trace of the original log call. *We do not want all our log to be referenced in some `logger.service.js` at line 15 all the time.*

## Installation

1. Install the npm package.
```
npm install --save @nsalaun/ng2-logger
```
2. Tells your application how to load `ng2-logger`. With SystemJS, it can look like :
```
    var paths = {
        'npm:': 'node_modules/'
    };
 
    // map tells the System loader where to look for things
    var map = {
        'app'                       : 'app',
        '@angular'                  : 'npm:@angular',
        'rxjs'                      : 'npm:rxjs',
        '@nsalaun'                  : 'npm:@nsalaun'
    };
 
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app'                       : {main: 'main.js', defaultExtension: 'js'},
        'rxjs'                      : {defaultExtension: 'js'},
        '@nsalaun/ng2-logger'       : {defaultExtension: 'js', main: 'bundles/ng2-logger.umd.js'}
    };
```
3. Import `Ng2Module` in your application and use `forRoot(level: Level)` to choose your log level :
```
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { Ng2Module, Level } from '@nsalaun/ng2-logger';
 
@NgModule({
    imports:      [ BrowserModule, Ng2Module.forRoot(Level.LOG) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { } 
```

## Usage

Inject the `Logger` service anywhere you need it and use it like it's `console` :
 
```
@Component({})
export class MyComponent(){

    constructor(private logger: Logger){
    
        this.logger.log('Hello !', "It's working :)");
        
    }
}
```

The service offer a sub-list of `window.console` capacities :

 - Basics :
     - **[log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)(...args: any[]) -** Outputs a message to the Web Console.
     - **[debug](https://developer.mozilla.org/en-US/docs/Web/API/Console/debug)(...args: any[]) -** Outputs a debugging message to the Web Console.
     - **[info](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)(...args: any[]) -** Outputs an informational message to the Web Console.
     - **[warn](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)(...args: any[]) -** Outputs a warning message to the Web Console.
     - **[error](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)(...args: any[]) -** Outputs an error message to the Web Console.
     
 - Groups :
     - **[group](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)(groupTitle: string) -** Creates a new inline group in the Web Console log.
     - **[groupCollapsed](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)(groupTitle: string) -** Creates a new inline group in the Web Console log that is initially collapsed.
     - **[groupEnd](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)() -** Exits the current inline group in the Web Console.
     
 - Time :
     - **[time](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)(timerName: string) -** Starts a timer you can use to track how long an operation takes. It works only with log `Level` equal or higher than `DEBUG`.
     - **[timeEnd](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)(timerName: string) -** Stops a timer that was previously started by calling `Logger.time()`. It works only with log `Level` equal or higher than `DEBUG`.
     
## License

(c) 2016 Noémi Salaün
[MIT](https://github.com/noemi-salaun/ng2-logger/blob/master/LICENSE)
