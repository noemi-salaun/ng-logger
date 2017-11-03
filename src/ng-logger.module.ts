/**
 * @license
 * Copyright Noémi Salaün All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE
 */

import { ModuleWithProviders, NgModule } from '@angular/core'
import { Level } from './level.enum'
import { Logger, LOGGER_LEVEL } from './logger.service'

/**
 * Created by Noémi Salaün on 09/17/2016.
 */

@NgModule()
export class NgLoggerModule {

  /**
   * Provide the {@link Logger} with the given log {@link Level}.
   * @param level The log level.
   */
  static forRoot (level: Level = Level.LOG): ModuleWithProviders {
    return {
      ngModule : NgLoggerModule,
      providers: [
        Logger,
        { provide: LOGGER_LEVEL, useValue: level },
      ],
    }
  }
}
