class Viewport {
	/* @ngInject */
	constructor($window, debounce, MOBILE_WIDTH) {
		var isMobile = false;

		this.initialize    = initialize;
		this.checkIsMobile = checkIsMobile;

		function initialize() {
			var onWindowResizeDebounced = debounce(300, onWindowResize);
			angular.element($window).on('resize', onWindowResizeDebounced);
			isMobile = compare();
		}

		function checkIsMobile() {
			return isMobile;
		}

		function onWindowResize() {
			isMobile = compare();
		}

		function compare() {
			return document.documentElement.clientWidth < MOBILE_WIDTH;
		}
	}
}

export default Viewport;
