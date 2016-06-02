class CartbtnController {
	// @ngInject
	constructor($rootScope, $scope, cartService) {
		var vm = this;
		var subscription = $rootScope.$on('product:add', onProductAdd);

		$scope.$on('$destroy', subscription);

		vm.orderCount = cartService.getProducts().length;

		function onProductAdd(e, orders) {
			vm.orderCount = orders.length;
		}
	}
}

export default CartbtnController;
