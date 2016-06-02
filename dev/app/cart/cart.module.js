import CartController   from './controllers/cart.controller';
import OrdersController from './controllers/orders.controller';
import cart             from './directives/cart.directive';

var cartModule = angular
	.module('app.cart', [])
	.controller('CartController', CartController)
	.controller('OrdersController', OrdersController)
	.directive('cart', cart)

export default cartModule;
