/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isInt
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isInt = function(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		};
	})();
}catch(e) {
	console.error(e);
}