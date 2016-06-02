class CartbtnController {
	// @ngInject
	constructor($rootScope, $scope, cartService) {
		var vm = this;
		var subscription = $rootScope.$on('product:add', onProductAdd);

		$scope.$on('$destroy', subscription);

		cartService
			.getProducts()
			.then(onGetProducts);

		function onGetProducts(orders) {
			vm.orderCount = orders.length;
		}

		function onProductAdd(e, orders) {
			vm.orderCount = orders.length;
		}
	}
}

export default CartbtnController;
