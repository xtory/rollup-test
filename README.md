1. npm init (to create package.json)

2. add
"build": "rollup -c",
"build-uglify": "rollup -c && uglifyjs build/bundle.js -cm > build/bundle.min.js"
to "scripts"
in package.json

3. add rollup.config.js

4.
npm install uglify --save-dev
npm install rollup --save-dev

5.
npm run build (or npm run build-uglify to minimiaze bundle)
