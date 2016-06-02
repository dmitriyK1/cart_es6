class Shop {
	constructor() {
		this.templateUrl  = 'app/shop/shop.view.html';
		this.controller   = 'ShopController as shopController';
	}

	static directiveFactory() {
		return new Shop();
	}
}

export default Shop.directiveFactory;
