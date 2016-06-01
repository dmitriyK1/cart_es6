import 'angular-ui-router';
import 'angular-scroll';
import 'angular-debounce';

import dataservice       from './common/services/dataservice.service';
import animationsService from './common/services/animations.service';
import routing           from './common/services/routing.service';
import viewport          from './common/services/viewport.service';

import runBlock          from './common/app.run';

var appCoreModule = angular
	.module('app.core', [
		'ui.router',
		'duScroll',
		'rt.debounce'
	])
	.service('animations', animationsService)
	.service('routing', routing)
	.service('viewport', viewport)
	.service('dataservice', dataservice)
	.run(runBlock);

export default appCoreModule;
