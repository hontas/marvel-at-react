module.exports = (function () {
	'use strict';

	var React = require('../vendor/react/react');
	var ImageThumbnail = require('./imageThumbnail');

	return React.createClass({
		displayName: 'Thumbnails',


		render: function() {
			function getImage(image) {
				/*jshint validthis:true */
				return ImageThumbnail({ onclick: this.props.setBg, src: image });
			}

			return (
				React.DOM.div({ className: "row" },
					this.props.images.map(getImage.bind(this))
				)
			);
		}
	});
})();