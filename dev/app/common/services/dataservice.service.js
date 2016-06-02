class Dataservice {
	/* @ngInject */
	constructor($http, constants) {
		var service = this;
		service.loadProducts   = loadProducts;
		service.loadCategories = loadCategories;

		function loadProducts() {
			return $http.get(constants.PRODUCTS_URL)
				.then(service.getData)
				.catch(service.getDataFailed);
		}

		function loadCategories() {
			return $http.get(constants.CATEGORIES_URL)
				.then(service.getData)
				.catch(service.getDataFailed);
		}

	}

	getData(data, status, headers, config) {
		return data.data;
	}

	getDataFailed(e) {
		var newMessage = 'XHR Failed for getData';

		if (e.data && e.data.description) {
			newMessage = newMessage + '\n' + e.data.description;
		}

		e.data.description = newMessage;

		console.error(newMessage);

		return $q.reject(e);
	}

}

export default Dataservice;
