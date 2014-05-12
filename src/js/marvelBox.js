module.exports = (function () {
	'use strict';

	var key = "?apikey=6d0eade97d285b7981d82b41f2712ba6";
	var endpoint = "http://gateway.marvel.com:80/v1/public/";
	var React = require('../vendor/react/react');
	var $ = require('../vendor/jquery/dist/jquery.js');
	var MarvelForm = require('./marvelForm');
	var PictureFrame = require('./pictureFrame');

	function getImgUrl(obj) {
		if (obj) {
			return [obj.path, obj.extension].join('.');
		}
	}

	return React.createClass({
		displayName: 'MarvelBox',

		getUrl: function(query) {
			var offset = Math.floor(Math.random() * this.props.total),
				url = endpoint + this.props.url + key;
			return query ? url + "&name=" + query : url + "&offset=" + offset + "&limit=1";
		},


		fetch: function(url) {
			this.setState({ loading: true });
			return $.get(url)
				.then(function(json) {
					console.log(json);
					return json.data.results[0];
				}.bind(this))
				.always(function() {
					this.setState({ loading: false });
				}.bind(this));
		},


		handleSubmit: function(query) {
			this.fetch(this.getUrl(query))
				.done(function(item) {
					if (item) {
						this.setState({
							imgUrl: getImgUrl(item.thumbnail),
							info: item.description,
							name: item.name || item.title
						});
					}
				}.bind(this));
		},

		componentDidMount: function() {
			//this.handleSubmit();
		},

		getInitialState: function() {
			return { imgUrl: '' };
		},

		render: function() {
			return (
				React.DOM.div({ className: "marvelBox"},
					React.DOM.div({ className: "well well-sm"},
						MarvelForm({ url: this.props.url, loading: this.state.loading, total: this.props.total, handleSubmit: this.handleSubmit }),
						PictureFrame({ name: this.state.name, imgUrl: this.state.imgUrl, info: this.state.info })
					)
				)
			);
		}
	});
})();