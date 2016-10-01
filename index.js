const through = require('through2').obj
const path = require('path')


module.exports.compose = function(){
	return through(function(file, encoding, cb){
		var shaderName = path.basename(file.path).split('.')[0]
		var shader = ''
		var foo = [];
		const lines = file.contents.toString().split('\n')
		for (let line in lines){
			var str = (lines[line] ? '\n\t"' + lines[line] + '"' : "").replace("'", "\'");
			foo.push(foo.length && str ? ',' + str : str);
		}
		shader = "var THREE = require('three');\n"
		shader += 'THREE.ShaderChunk.' + shaderName + ' = ['
		shader += foo.join('') + '].join("\\n")'
		shader += ';\n'

		this.push(shader)
		cb()
	})
}
