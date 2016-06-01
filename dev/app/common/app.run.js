/* @ngInject */
function runBlock(routing, animations, viewport) {
	routing.initialize();
	animations.initialize();
	viewport.initialize();
}

export default runBlock;
