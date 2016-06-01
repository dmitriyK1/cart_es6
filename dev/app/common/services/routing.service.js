class Routing {
	/* @ngInject */
	constructor($rootScope, $document) {
		this.initialize = initialize;

		function initialize() {
			$rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
			$rootScope.$on('$stateChangeError', this.onStateChangeError);
		}

		function onStateChangeSuccess() {
			$document.scrollTop(0, 0);
		}
	}

	onStateChangeError(event, toState, toParams, fromState, fromParams, error) {}
}

export default Routing;
