import angular   from 'angular';
import appModule from './app.module';

angular
	.element(document).ready(() => {
		angular.bootstrap(document.documentElement, [appModule.name])
	});

window.onerror = function onError(msg, url, line, col, error) {
	var suppressErrorAlert = true;
	var extra = !col ? '' : '\ncolumn: ' + col;
	extra += !error ? '' : '\nerror: ' + error;

	console.error("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

	return suppressErrorAlert;
}
