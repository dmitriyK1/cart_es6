import ProductsListController from './controllers/productsList.controller';
import ShopController         from './controllers/shop.controller';
import SidebarController      from './controllers/sidebar.controller';
import productsList from './directives/productsList.directive';
import shop         from './directives/shop.directive';
import sidebar      from './directives/sidebar.directive';

var shopModule = angular
	.module('shop', [])
	.controller('ProductsListController', ProductsListController)
	.controller('ShopController', ShopController)
	.controller('SidebarController', SidebarController)
	.directive('productsList', productsList)
	.directive('shop', shop)
	.directive('sidebar', sidebar)

export default shopModule;
