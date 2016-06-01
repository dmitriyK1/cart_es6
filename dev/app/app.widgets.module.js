import toTop             from './common/directives/toTop.directive';
import orders            from './cart/directives/orders.directive';
import cartBtn           from './shop/directives/cartBtn.directive';
import CartbtnController from './shop/controllers/cartBtn.controller';

var appWidgetsModule = angular
	.module('app.widgets', [])
	.directive('toTop', toTop)
	.directive('orders', orders)
	.directive('cartBtn', cartBtn)
	.controller('CartbtnController', CartbtnController)

export default appWidgetsModule;
