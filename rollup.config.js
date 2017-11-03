import resolve from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'

// Add here external dependencies that actually you use.
const globals = {
  '@angular/core': 'ng.core',
}

export default {
  external: Object.keys(globals),
  plugins : [resolve(), sourcemaps()],
  onwarn  : () => { return },
  output  : {
    format   : 'umd',
    name     : 'nsalaun.ngLogger',
    globals  : globals,
    sourcemap: true,
    exports  : 'named',
  },
}
