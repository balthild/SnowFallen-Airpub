;
(function(angular, debug) {
	var app = angular.module('airpub');
	app.filter('imgIdLoop', function() {
		return function(url) {
			if (typeof(window.imgIdLoop) == "undefined") {
				window.imgIdLoop = Math.floor(Math.random() * 9);
			}
			url = url.replace('[imgIdLoop]', window.imgIdLoop);
			if (window.imgIdLoop >= 8) {
				window.imgIdLoop = 0;
			} else {
				window.imgIdLoop++;
			}
			return url;
		};
	});
})(window.angular, window.debug);

var setEffect = function() {
	var banner = document.getElementById("banner");
	if (!banner) return;
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		navH = banner.clientHeight,
		effectLevel = 0;
	if (scrollTop > navH) {
		effectLevel = 1;
	} else {
		// level 0-1
		effectLevel = (scrollTop / navH).toFixed(2);
	}
	document.getElementById('head-menu-bg').style.opacity = effectLevel * 0.8;
};
window.addEventListener('scroll', function() {
	setEffect();
});