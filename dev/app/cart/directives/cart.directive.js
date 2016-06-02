class Cart {
	constructor() {
		this.templateUrl  = 'app/cart/cart.view.html';
		this.controller   = 'CartController as cartController';
	}

	static directiveFactory() {
		return new Cart();
	}
}

export default Cart.directiveFactory;
