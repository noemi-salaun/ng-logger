/**
 * @license
 * Copyright Noémi Salaün All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE
 */

import {Injectable, InjectionToken, Inject} from "@angular/core";
import {Level} from "./level.enum";

/**
 * Created by Noémi Salaün on 09/17/2016.
 */

/**
 * The token to provide the log {@link Level}.
 */
export const LOGGER_LEVEL = new InjectionToken<Level>('LoggerLevel');

/**
 * A logger service that provide the same functions as {@link console}.
 * The logger is binded to the console, so the Web Console shows the correct file and line number of the original call.
 */
@Injectable()
export class Logger {

    /**
     * Outputs a message to the Web Console.
     * @param message A JavaScript string containing zero or more substitution strings.
     * @param optionalParams A list of JavaScript objects to output OR JavaScript objects with which to replace substitution strings within message.
     */
    log: (message?: any, ...optionalParams: any[]) => void;

    /**
     * Outputs a debugging message to the Web Console.
     * @param message A JavaScript string containing zero or more substitution strings.
     * @param optionalParams A list of JavaScript objects to output OR JavaScript objects with which to replace substitution strings within message.
     */
    debug: (message?: any, ...optionalParams: any[]) => void;

    /**
     * Outputs an informational message to the Web Console.
     * @param message A JavaScript string containing zero or more substitution strings.
     * @param optionalParams A list of JavaScript objects to output OR JavaScript objects with which to replace substitution strings within message.
     */
    info: (message?: any, ...optionalParams: any[]) => void;

    /**
     * Outputs a warning message to the Web Console.
     * @param message A JavaScript string containing zero or more substitution strings.
     * @param optionalParams A list of JavaScript objects to output OR JavaScript objects with which to replace substitution strings within message.
     */
    warn: (message?: any, ...optionalParams: any[]) => void;

    /**
     * Outputs an error message to the Web Console.
     * @param message A JavaScript string containing zero or more substitution strings.
     * @param optionalParams A list of JavaScript objects to output OR JavaScript objects with which to replace substitution strings within message.
     */
    error: (message?: any, ...optionalParams: any[]) => void;

    /**
     * Creates a new inline group in the Web Console log.
     * @param groupTitle An optional title for the group.
     */
    group: (groupTitle?: string) => void;

    /**
     * Creates a new inline group in the Web Console log that is initially collapsed.
     * @param groupTitle An optional title for the group.
     */
    groupCollapsed: (groupTitle?: string) => void;

    /**
     * Exits the current inline group in the Web Console.
     */
    groupEnd: () => void;

    /**
     * Starts a timer you can use to track how long an operation takes. It works only with log {@link Level} equal or higher than DEBUG.
     * @param timerName The name to give the new timer. This will identify the timer.
     */
    time: (timerName?: string) => void;

    /**
     * Stops a timer that was previously started by calling {@link Logger.time}. It works only with log {@link Level} equal or higher than DEBUG.
     * @param timerName The name of the timer to stop. Once stopped, the elapsed time is automatically displayed in the Web Console.
     */
    timeEnd: (timerName?: string) => void;

    /**
     * The log level.
     */
    private _level: Level;

    /**
     * Returns the log level.
     */
    get level(): Level {
        return this._level;
    }

    constructor(@Inject(LOGGER_LEVEL) level: Level) {

        this._level = level;

        // console.log
        if (this._level >= Level.LOG && console && console.log) {
            this.log = console.log.bind(console);
        } else {
            this.log = () => {
            };
        }

        // console.debug
        if (this._level >= Level.DEBUG && console && console.debug) {
            this.debug = console.debug.bind(console);
        } else {
            this.debug = () => {
            };
        }

        // console.info
        if (this._level >= Level.INFO && console && console.info) {
            this.info = console.info.bind(console);
        } else {
            this.info = () => {
            };
        }

        // console.warn
        if (this._level >= Level.WARN && console && console.warn) {
            this.warn = console.warn.bind(console);
        } else {
            this.warn = () => {
            };
        }

        // console.error
        if (this._level >= Level.ERROR && console && console.error) {
            this.error = console.error.bind(console);
        } else {
            this.error = () => {
            };
        }

        // console.group
        if (this._level > Level.OFF && console && console.group) {
            this.group = console.group.bind(console);
        } else {
            this.group = () => {
            };
        }

        // console.groupCollapsed
        if (this._level > Level.OFF && console && console.groupCollapsed) {
            this.groupCollapsed = console.groupCollapsed.bind(console);
        } else {
            this.groupCollapsed = () => {
            };
        }

        // console.groupEnd
        if (this._level > Level.OFF && console && console.groupEnd) {
            this.groupEnd = console.groupEnd.bind(console);
        } else {
            this.groupEnd = () => {
            };
        }

        // console.time
        if (this._level >= Level.DEBUG && console && console.time) {
            this.time = console.time.bind(console);
        } else {
            this.time = () => {
            };
        }

        // console.timeEnd
        if (this._level >= Level.DEBUG && console && console.timeEnd) {
            this.timeEnd = console.timeEnd.bind(console);
        } else {
            this.timeEnd = () => {
            };
        }

    }
}