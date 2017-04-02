import uglify from "rollup-plugin-uglify";

export default {
    entry: 'index.js',
    dest: 'bundles/ng-logger.umd.min.tmp',
    format: 'umd',
    moduleName: 'ng.logger',
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core'
    },
    plugins: [
        uglify()
    ]
}
