# React.js components and the Marvel API

To try it out you'll need to get your own developer key from (http://developer.marvel.com/)(http://developer.marvel.com/)

Create a file called `.api` in the root directory and enter:
```js
//.api
module.exports = {
	endpoint: 'http://gateway.marvel.com:80/v1/public/comics?',
	key: YOUR_KEY
};
```

Or check out `marvel-api-01.png` or `marvel-api-02.png` for a sneak peak.