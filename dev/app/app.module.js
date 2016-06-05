import coreModule    from './app.core.module';
import widgetsModule from './app.widgets.module';
import shopModule    from './shop/shop.module';
import cartModule    from './cart/cart.module';
import routes        from './common/app.routes';
import cartService   from './common/services/cart.service';
import constants     from './common/app.constants';
import configure     from './common/app.config';

var appModule = angular.module('app', [
		coreModule.name,
		widgetsModule.name,
		shopModule.name,
		cartModule.name
	])
	.constant('constants', constants)
	.config(routes)
	.config(configure)
	.service('cartService', cartService)

export default appModule;
