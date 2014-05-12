# React.js components and the Marvel API

For this to work on your machine you'll need to get your own developer key from [http://developer.marvel.com/](http://developer.marvel.com/)

### Get it up n' running

Open up a terminal/bash and write:

```shell
git clone https://github.com/hontas/marvel-at-react.git
cd marvel-at-react/
npm install
touch .api
```

Edit the newly created `.api` and enter:
```js
//.api
module.exports = {
	endpoint: 'http://gateway.marvel.com:80/v1/public/comics?',
	key: YOUR_MARVEL_API_KEY
};
```

Then just do:
```shell
gulp
```

Open up a browser, navigate to [http://localhost:3000](http://localhost:3000) and hopefully you'll se something like below.

![image](https://raw.githubusercontent.com/hontas/marvel-at-react/master/marvel-api-01.png)
![image](https://raw.githubusercontent.com/hontas/marvel-at-react/master/marvel-api-02.png)