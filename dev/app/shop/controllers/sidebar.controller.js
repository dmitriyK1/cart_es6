class SidebarController {
	/* @ngInject */
	constructor(dataservice) {
		var vm = this;

		activate();

		function activate() {
			dataservice
				.loadCategories()
				.then((data) => vm.categories = data);
		}
	}

	selectCategory(categoryName) {
		if (this.activeCategory === categoryName) {
			this.activeCategory = '';
			return;
		}

		this.activeCategory = categoryName;
	}

}

export default SidebarController;
