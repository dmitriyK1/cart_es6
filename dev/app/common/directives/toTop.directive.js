/* @ngInject */
function toTop($document, debounce) {
	var ddo = {
		scope: {},
		link: link
	};

	return ddo;

	function link(scope, element) {
		element.on('click', function() {
			var top = 0;
			var duration = 500;

			$document.scrollTop(top, duration);

			element.removeClass('active');
		});

		var onDocumentScrollDebounced = debounce(300, onDocumentScroll);
		$document.on('scroll', onDocumentScrollDebounced);

		scope.$on('$destroy', onDestroy);
		element.on('$destroy', onDestroy);

		function onDocumentScroll() {
			if ($document.scrollTop() > 250) {
				element.addClass('active');
				return;
			}

			element.removeClass('active');
		}

		function onDestroy() {
			$document.off('scroll');
		}
	}
}

export default toTop;
