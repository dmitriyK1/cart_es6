/* @ngInject */
function config($locationProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('shop', {
			url: '/',
			template: '<shop></shop>'
		})
		.state('cart', {
			url: '/cart',
			template: '<cart></cart>'
		});
}

export default config;
