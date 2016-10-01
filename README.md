#three-shaders-composer
[Gulp](http://github.com/gulpjs/gulp) task to compose your shaders from raw glsl files into
[THREE.js](https://github.com/mrdoob/three.js) shader chunks.

## Installation

Install package with NPM and add it to your development dependencies:

`npm install three-shaders-composer --save`

## Usage

```js

const shaders = require('three-shaders-composer')
const source = require('vinyl-source-stream')

gulp.task('shaders', ()=>{
	return gulp.src('./client/shaders/**/*')
	.pipe(shaders.compose())
	.pipe(source('shaders.js'))
	.pipe(gulp.dest('public'))
})
```
