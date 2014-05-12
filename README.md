# React.js components and the Marvel API

To try it out you'll need to get your own developer key from [http://developer.marvel.com/](http://developer.marvel.com/)

Create a file called `.api` in the root directory and enter:
```js
//.api
module.exports = {
	endpoint: 'http://gateway.marvel.com:80/v1/public/comics?',
	key: YOUR_KEY
};
```

![image](https://raw.githubusercontent.com/hontas/marvel-at-react/master/marvel-api-01.png)
![image](https://raw.githubusercontent.com/hontas/marvel-at-react/master/marvel-api-02.png)