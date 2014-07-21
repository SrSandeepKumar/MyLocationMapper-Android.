var points = (function ($, points) {
	"use strict";

	var plotLine = function(pts) {
		map.addPolyline({
			points: pts,
			'color' : '#ff3019',
			'width': 5,
			'geodesic': true
		});

		map.animateCamera({
			'target': pts,
			'tilt': 60,
			'zoom': 18,
			'bearing': 140
		});
	};

	return {
		plotLine: plotLine,
	};
}(jQuery, points || {}));
