class ProductsList {
	constructor() {
		this.scope = {
			search: '@',
			category: '@'
		};

		this.templateUrl      = 'app/shop/productsList.directive.html';
		this.controller       = 'ProductsListController';
		this.controllerAs     = 'productsListController';
		this.bindToController = true;
	}

	static directiveFactory() {
		return new ProductsList();
	}
}
export default ProductsList.directiveFactory;
