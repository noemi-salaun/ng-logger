import uglify from "rollup-plugin-uglify";

export default {
    entry: 'index.js',
    dest: 'bundles/ng2-logger.umd.min.js',
    format: 'umd',
    moduleName: 'ng2.logger',
    globals: {
        '@angular/core': 'ng.core',
    },
    plugins: [
        uglify()
    ]
}
