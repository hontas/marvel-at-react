module.exports = (function () {
	'use strict';

	var React = require('../vendor/react/react');

	return React.createClass({
		displayName: 'PictureFrame',

		render: function() {
			if (!this.props.imgUrl) { return (React.DOM.div(null)); }
			return (
				React.DOM.figure({ className: "row-fluid" },
					React.DOM.h5(null, this.props.name),
					React.DOM.img({ className: "img-responsive img-thumbnail", src: this.props.imgUrl, alt: this.props.name }),
					React.DOM.p(null),
					React.DOM.figcaption({ dangerouslySetInnerHTML: { __html: this.props.info } })
				)
			);
		}
	});
})();