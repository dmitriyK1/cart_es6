// @ngInject
function configure($httpProvider, $compileProvider) {
	$httpProvider.defaults.cache      = true;
	$compileProvider.debugInfoEnabled = false;
}

export default configure;
