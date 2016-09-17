import {NgModule, ModuleWithProviders} from "@angular/core";
import {Level} from "./level.enum";
import {Logger, LOGGER_LEVEL} from "./logger.service";
/**
 * Created by Noémi Salaün on 09/17/2016.
 */

@NgModule()
export class Ng2LoggerModule {

    /**
     * Provide the {@link Logger} with the given log {@link Level}.
     * @param level The log level.
     */
    static forRoot(level:Level = Level.LOG): ModuleWithProviders {
        return {
            ngModule: Ng2LoggerModule,
            providers: [
                Logger,
                {provide: LOGGER_LEVEL, useValue: level}
            ]
        };
    }
}