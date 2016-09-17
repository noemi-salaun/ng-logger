
export default {
  entry: 'index.js',
  dest: 'bundles/ng2-logger.umd.js',
  format: 'umd',
  external: [
    '@angular/core'
  ],
  globals: {
    '@angular/core': 'ng.core',
  },
  moduleName: 'ng2.logger'
}
