class Orders {
	constructor() {
		this.templateUrl  = 'app/cart/orders.directive.html';
		this.controller   = 'OrdersController';
		this.controllerAs = 'ordersController';
	}

	static directiveFactory() {
		return new Orders();
	}
}

export default Orders.directiveFactory;
