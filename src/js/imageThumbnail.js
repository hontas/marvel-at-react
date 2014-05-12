module.exports = (function () {
	'use strict';

	var React = require('../vendor/react/react');

	return React.createClass({
		displayName: 'ImageThumbnail',

		render: function() {
			return (
				React.DOM.div({ className: "col-md-2" },
					React.DOM.a({ href: "#", className: "thumbnail", onClick: this.props.onclick },
						React.DOM.img({ className: "img-rounded", src: this.props.src, alt: "" })
					)
				)
			);
		}
	});
})();