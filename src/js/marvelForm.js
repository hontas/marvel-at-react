module.exports = (function () {
	'use strict';

	var React = require('../vendor/react/react');

	return React.createClass({
		displayName: 'MarvelForm',

		handleSubmit: function() {
			var query = this.refs.query.getDOMNode().value.trim();
			this.props.handleSubmit(query);
			return false;
		},

		render: function() {
			var singular = this.props.url.slice(0,-1),
				placeholder = ["Find", singular, "(", this.props.total, this.props.url, ")"].join(' ');
			return (
				React.DOM.form({ onSubmit: this.handleSubmit },
					React.DOM.div({ className: "form-group has-feedback" },
						React.DOM.input({ type: "text", className: "form-control", placeholder: placeholder, ref:"query" }),
						this.props.loading ? React.DOM.span({ className: "fa fa-spinner fa-spin form-control-feedback" }) : ''
					)
				)
			);
		}
	});
})();