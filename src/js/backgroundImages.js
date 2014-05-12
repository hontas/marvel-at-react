module.exports = (function () {
	'use strict';

	var React = require('../vendor/react/react');
	var Thumbnails = require('./thumbnails');
	var api = require('../../.api');
	var key = "apikey=" + api.key;
	var localStorageKey = 'marvel.api.favorite.images';

	function getSrc(image) {
		return [image.path, image.extension].join('.');
	}

	function getOffset() {
		return Math.floor(Math.random() * 31918);
	}

	function getQuery() {
		return ["&offset=", getOffset(), "&limit=1"].join('');
	}

	function getUrl() {
		return [api.endpoint, key, getQuery()].join('');
	}

	return React.createClass({
		getRandomComicImages: function() {
			this.setState({ loading: true });
			$.get(getUrl(), function (json) {
				console.log(json);
				var comic = json.data.results[0],
					images = comic.images;

				if (images.length) {
					this.setState({
						foundImages: images.map(getSrc),
						foundComicTitle: comic.title
					});
				} else {
					this.setState({
						foundImages: [getSrc(comic.thumbnail)],
						foundComicTitle: comic.title
					});
				}
				this.setState({ loading: false });
			}.bind(this));
		},

		setBackgroundImage: function(e) {
			var img = e.target;
			if (img.src) {
				document.body.style.backgroundImage = "url(" + img.src + ")";
			}
			e.preventDefault();
		},

		saveFavorite: function() {
			var url = document.body.style.backgroundImage.slice(4, -1),
				images = this.state.savedImages.slice(),
				saved = images.some(function(img) {
					return img === url;
				});

			if (!saved) {
				images.push(url);
				window.localStorage.setItem(localStorageKey, JSON.stringify(images));
				this.setState({
					savedImages: images
				});
			}
		},

		componentDidMount: function() {
			var favorites = window.localStorage.getItem(localStorageKey);
			if (favorites) {
				this.setState({
					savedImages: JSON.parse(favorites)
				});
			}
		},

		getInitialState: function() {
			return {
				foundImages: [],
				savedImages: []
			};
		},

		render: function() {
			return (
				React.DOM.div({ className: "panel panel-default" },
					React.DOM.div({ className: "panel-heading" }, "Random comics"),
					React.DOM.div({ className: "panel-body" },
						Thumbnails({ images: this.state.foundImages, setBg: this.setBackgroundImage }),
						Thumbnails({ images: this.state.savedImages, setBg: this.setBackgroundImage })
					),

					React.DOM.div({ className: "panel-footer" },
						React.DOM.button({ onClick: this.getRandomComicImages, className: "btn btn-sm btn-default" },
							"Get comic! ", this.state.loading ? React.DOM.span({ className: "fa fa-spinner fa-spin" }) : ''
						),
						React.DOM.button({ onClick: this.saveFavorite, className:"btn btn-sm btn-default"}, "Save current background as favorite")
					)
				)
			);
		}
	});

})();