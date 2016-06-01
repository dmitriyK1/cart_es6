import appCoreModule    from './app.core.module';
import appWidgetsModule from './app.widgets.module';

import './common/app.constants';
import routes from './common/app.routes';

import cartService from './common/services/cart.service';

import CartController         from './cart/controllers/cart.controller';
import OrdersController       from './cart/controllers/orders.controller';
import ProductsListController from './shop/controllers/productsList.controller';
import ShopController         from './shop/controllers/shop.controller';
import SidebarController      from './shop/controllers/sidebar.controller';

import cart         from './cart/directives/cart.directive';
import productsList from './shop/directives/productsList.directive';
import shop         from './shop/directives/shop.directive';
import sidebar      from './shop/directives/sidebar.directive';

var appModule = angular.module('app', [
		appCoreModule.name,
		appWidgetsModule.name
	])
	.config(routes)
	.service('cartService', cartService)
	.controller('CartController', CartController)
	.controller('OrdersController', OrdersController)
	.controller('ProductsListController', ProductsListController)
	.controller('ShopController', ShopController)
	.controller('SidebarController', SidebarController)
	.directive('cart', cart)
	.directive('productsList', productsList)
	.directive('shop', shop)
	.directive('sidebar', sidebar)

export default appModule;
