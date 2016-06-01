class Cart {
	constructor() {
		this.templateUrl  = 'app/cart/cart.view.html';
		this.controller   = 'CartController';
		this.controllerAs = 'cartController';
	}

	static directiveFactory() {
		return new Cart();
	}
}

export default Cart.directiveFactory;
