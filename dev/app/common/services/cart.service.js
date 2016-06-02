class CartService {
	/* @ngInject */
	constructor($rootScope, $q) {
		var orderedProducts = [];

		this.getProducts   = getProducts;
		this.addProduct    = addProduct;
		this.removeProduct = removeProduct;

		function getProducts() {
			var deferred = $q.defer();
			deferred.resolve(orderedProducts);
			return deferred.promise
		}

		function addProduct(product) {
			this.addOrderId(product);
			orderedProducts.push(product);
			$rootScope.$emit('product:add', orderedProducts);
		}

		function removeProduct(orderId) {
			orderedProducts = orderedProducts.filter(function iterator(order) {
				return order.orderId !== orderId;
			});

			$rootScope.$emit('product:remove', orderedProducts);
		}
	}

	addOrderId(product) {
		product.orderId = Math.random(0, 1) * 10e16;
	}
}

export default CartService;
