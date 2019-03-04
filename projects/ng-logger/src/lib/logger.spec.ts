/**
 * @license
 * Copyright Noémi Salaün All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE
 */

import { inject, TestBed } from '@angular/core/testing';
import { Level } from './level.enum';
import { Logger } from './logger.service';
import { NgLoggerModule } from './ng-logger.module';

/**
 * Created by Noémi Salaün on 17/09/2016.
 */

describe('Logger service', () => {

  beforeEach(() => {
    spyOn(console, 'log');
    spyOn(console, 'debug');
    spyOn(console, 'info');
    spyOn(console, 'warn');
    spyOn(console, 'error');
    spyOn(console, 'group');
    spyOn(console, 'groupCollapsed');
    spyOn(console, 'groupEnd');
    spyOn(console, 'time');
    spyOn(console, 'timeEnd');
  });

  describe('with level OFF', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.OFF)] });
    });

    it('should not call anything', (inject([Logger], (logger: Logger) => {
      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).not.toHaveBeenCalled();
      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).not.toHaveBeenCalled();
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
      expect(console.group).not.toHaveBeenCalled();
      expect(console.groupCollapsed).not.toHaveBeenCalled();
      expect(console.groupEnd).not.toHaveBeenCalled();
      expect(console.time).not.toHaveBeenCalled();
      expect(console.timeEnd).not.toHaveBeenCalled();
    })));
  });

  describe('with level ERROR', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.ERROR)] });
    });

    it('should call groups and error', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.ERROR);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).not.toHaveBeenCalled();
      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).not.toHaveBeenCalled();
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).not.toHaveBeenCalled();
      expect(console.timeEnd).not.toHaveBeenCalled();
    })));
  });

  describe('with level WARN', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.WARN)] });
    });

    it('should call groups, warn and error', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.WARN);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).not.toHaveBeenCalled();
      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith('warn', 'param');
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).not.toHaveBeenCalled();
      expect(console.timeEnd).not.toHaveBeenCalled();
    })));
  });

  describe('with level INFO', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.INFO)] });
    });

    it('should call groups and levels >= INFO', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.INFO);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).not.toHaveBeenCalled();
      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).toHaveBeenCalledWith('info', 'param');
      expect(console.warn).toHaveBeenCalledWith('warn', 'param');
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).not.toHaveBeenCalled();
      expect(console.timeEnd).not.toHaveBeenCalled();
    })));
  });

  describe('with level DEBUG', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.DEBUG)] });
    });

    it('should call groups, times and levels >= DEBUG', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.DEBUG);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).not.toHaveBeenCalled();
      expect(console.debug).toHaveBeenCalledWith('debug', 'param');
      expect(console.info).toHaveBeenCalledWith('info', 'param');
      expect(console.warn).toHaveBeenCalledWith('warn', 'param');
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).toHaveBeenCalledWith('time');
      expect(console.timeEnd).toHaveBeenCalledWith('time');
    })));
  });

  describe('with level LOG', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot(Level.LOG)] });
    });

    it('should call groups, times and all levels', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.LOG);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).toHaveBeenCalledWith('log', 'param');
      expect(console.debug).toHaveBeenCalledWith('debug', 'param');
      expect(console.info).toHaveBeenCalledWith('info', 'param');
      expect(console.warn).toHaveBeenCalledWith('warn', 'param');
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).toHaveBeenCalledWith('time');
      expect(console.timeEnd).toHaveBeenCalledWith('time');
    })));
  });

  describe('with default level', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [NgLoggerModule.forRoot()] });
    });

    it('should have level LOG', (inject([Logger], (logger: Logger) => {
      expect(logger.level).toBe(Level.LOG);

      logger.log('log', 'param');
      logger.debug('debug', 'param');
      logger.info('info', 'param');
      logger.warn('warn', 'param');
      logger.error('error', 'param');
      logger.group('group');
      logger.groupCollapsed('groupCollapsed');
      logger.groupEnd();
      logger.time('time');
      logger.timeEnd('time');

      expect(console.log).toHaveBeenCalledWith('log', 'param');
      expect(console.debug).toHaveBeenCalledWith('debug', 'param');
      expect(console.info).toHaveBeenCalledWith('info', 'param');
      expect(console.warn).toHaveBeenCalledWith('warn', 'param');
      expect(console.error).toHaveBeenCalledWith('error', 'param');
      expect(console.group).toHaveBeenCalledWith('group');
      expect(console.groupCollapsed).toHaveBeenCalledWith('groupCollapsed');
      expect(console.groupEnd).toHaveBeenCalled();
      expect(console.time).toHaveBeenCalledWith('time');
      expect(console.timeEnd).toHaveBeenCalledWith('time');
    })));
  });

});
