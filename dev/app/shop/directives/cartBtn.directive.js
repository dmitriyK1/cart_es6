class CartBtn {
	/* @ngInject */
	constructor() {
		this.scope        = {};
		this.templateUrl  = 'app/shop/cartBtn.directive.html';
		this.controller   = 'CartbtnController';
		this.controllerAs = 'cartbtnController';
	}

	static directiveFactory() {
		return new CartBtn();
	}
}

export default CartBtn.directiveFactory;
