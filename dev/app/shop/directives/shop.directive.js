class Shop {
	constructor() {
		this.templateUrl  = 'app/shop/shopView.html';
		this.controller   = 'ShopController';
		this.controllerAs = 'shopController';
	}

	static directiveFactory() {
		return new Shop();
	}
}

export default Shop.directiveFactory;
