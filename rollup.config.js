export default {
    entry     : 'index.js',
    dest      : 'bundles/ng-logger.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core'
    ],
    globals   : {
        '@angular/core': 'ng.core',
    },
    moduleName: 'ng.logger'
}
