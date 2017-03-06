export default {
    entry: "./tests.js",
    targets: [
		{
			format: 'iife',
			moduleName: 'Cybo',
			dest: 'build/bundle.js'
		}
		//}, {
		// 	format: 'es',
        //     moduleName: 'Cybo',
		// 	dest: 'build/bundle.es.js'
		// }, {
		// 	format: 'amd',
		// 	moduleName: 'Cybo',
		// 	dest: 'build/bundle.amd.js'
		// }, {
		// 	format: 'cjs',
		// 	moduleName: 'Cybo',
		// 	dest: 'build/bundle.cjs.js'
		// }, {
		// 	format: 'umd',
		// 	moduleName: 'Cybo',
		// 	dest: 'build/bundle.umd.js'
		// }
	]
};
