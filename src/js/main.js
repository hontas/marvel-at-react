(function () {
	'use strict';

	var React = require('../vendor/react/react');
	var MarvelBox = require('./marvelBox');
	var BackgroundImages = require('./backgroundImages');

	React.renderComponent(
		MarvelBox({ url: "comics", total:31918 }),
		document.getElementById('marvel-comic')
	);

	React.renderComponent(
		MarvelBox({ url: "characters", total: 1402 }),
		document.getElementById('marvel-character')
	);

	React.renderComponent(
		MarvelBox({ url: "series", total: 7229 }),
		document.getElementById('marvel-series')
	);

	React.renderComponent(
		MarvelBox({ url: "events", total: 60 }),
		document.getElementById('marvel-events')
	);

	React.renderComponent(
		BackgroundImages(null),
		document.getElementById('background-images')
	);

})();