class OrdersController {

	/* @ngInject */
	constructor($rootScope, $scope, cartService) {
		var vm           = this;
		vm.togglePopover = togglePopover;
		vm.removeOrder   = removeOrder;

		activate();

		function activate() {
			var subscription = $rootScope.$on('product:remove', onProductRemove);
			$scope.$on('$destroy', subscription);

			updateOrdersInfo();
		}

		function togglePopover(order) {
			if (vm.activePopover === order.orderId) {
				vm.activePopover = '';
				return;
			}

			vm.activePopover = order.orderId;
		}

		function updateOrdersInfo() {
			cartService
				.getProducts()
				.then(onGetProducts);
		}

		function onGetProducts(orders) {
			vm.orders      = orders;
			vm.ordersCount = orders.length;
		}

		function removeOrder(order) {
			cartService.removeProduct(order.orderId);
		}


		function onProductRemove(e, orders) {
			updateOrdersInfo();
		}

	}
}

export default OrdersController;
