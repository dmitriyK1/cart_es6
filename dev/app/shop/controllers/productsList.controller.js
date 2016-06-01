class ProductsListController {
	/* @ngInject */
	constructor(dataservice, cartService) {
		var vm = this;
		vm.add = add;

		activate();

		function activate() {
			dataservice
				.loadProducts()
				.then(onProductsLoad);
		}

		function add(product) {
			cartService.addProduct({
				id: product.id,
				price: product.price,
				name: product.name
			});
		}

		function onProductsLoad(products) {
			vm.products = products;
		}
	}

}

export default ProductsListController;
