# ng-logger

[![Build Status](https://img.shields.io/travis/noemi-salaun/ng-logger/master.svg?style=flat-square)](https://travis-ci.org/noemi-salaun/ng-logger)
[![npm version](https://img.shields.io/npm/v/@nsalaun/ng-logger.svg?style=flat-square)](https://www.npmjs.com/package/@nsalaun/ng-logger)
[![devDependencies Status](https://img.shields.io/david/dev/noemi-salaun/ng-logger.svg?style=flat-square)](https://david-dm.org/noemi-salaun/ng-logger?type=dev)
[![peerDependencies Status](https://img.shields.io/david/peer/noemi-salaun/ng-logger.svg?style=flat-square)](https://david-dm.org/noemi-salaun/ng-logger?type=peer)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE)

**ng-logger** is a simple Angular logger service that responds to two needs :

 - A log level system to be able to disable certain calls as needed. *We do not want to see our debug trace on production.*
 - A logger that keeps trace of the original log call. *We do not want all our logs to be referenced in some `logger.service.js` all the time.*

This package is compatible with **Angular 5**, [Angular AoT compiler](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) and [Angular CLI](https://cli.angular.io/).

## Installation

### 1 - Install the npm package.

```shell
npm install --save @nsalaun/ng-logger
```
        
### 2 - Import `NgLoggerModule` in your application and use `forRoot(level: Level)` to choose your log level :

```typescript
import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { AppComponent }          from './app.component';
import { NgLoggerModule, Level } from '@nsalaun/ng-logger';
     
@NgModule({
    imports:      [ BrowserModule, NgLoggerModule.forRoot(Level.LOG) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { } 
```

### 3 - Loading

#### Using SystemJS configuration

```JavaScript
System.config({
    map: {
        '@nsalaun/ng-logger': 'node_modules/@nsalaun/ng-logger/bundles/ng-logger.umd.js'
    }
});
```

#### Angular-CLI

No need to set up anything, just import it in your code.

#### Rollup or webpack

No need to set up anything, just import it in your code.

#### Plain JavaScript

Include the `umd` bundle in your `index.html`:
```html
<script src="node_modules/@nsalaun/ng-logger/bundles/ng-logger.umd.js"></script>
```
and use global `nsalaun.ngLogger` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.
Because of the new metadata version with Angular 5, the library is not compatible with previous Angular version.

## Usage

### Basic Usage

Inject the `Logger` service anywhere you need it and use it like it's `console` :
 
```typescript
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
     
### Using different log level on developpment or production

To set a different log level depending on environment, you can proceed as follows:

```typescript
import { NgModule, isDevMode }   from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { NgLoggerModule, Level } from '@nsalaun/ng-logger';
import { AppComponent }          from './app.component';

// Set different log level depending on environment.
const LOG_LEVEL = Level.LOG;
if (!isDevMode()) {
    const LOG_LEVEL = Level.ERROR;
}
 
@NgModule({
    imports     : [ BrowserModule, NgLoggerModule.forRoot(LOG_LEVEL) ],
    declarations: [ AppComponent ],
    bootstrap   : [ AppComponent ],
})
export class AppModule { } 
```

*Please note this method is one among others. It may not suit your projects requirements/constraints*
     
## License

© 2017 Noémi Salaün

[MIT](https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE)
