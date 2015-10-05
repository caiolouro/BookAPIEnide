var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

//default é um nome qualquer
gulp.task('default', function() {
	//recebe um json
	nodemon({
		script: 'app.js',
		ext: 'js', //monitorar arquivos dessa extensão
		env: { PORT:8000 }, //define porta diferente no environment
		ignore: ['./node_modules/**'] //não será monitorado
	})
	//associa função ao evento de restart
	.on('restart', function(){
		console.log('Restarting');
	});
});