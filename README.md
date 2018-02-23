Tutoriaux React-Redux
=====================

tutorial : [Modern React with Redux sur udemy](https://www.udemy.com/react-redux/learn/v4/overview)

Overview
--------

```bash
docker-compose build
docker-compose up
docker-compose run web bash
```

ReduxSimpleStarter
------------------

### installer les dépendances

```bash
cd ReduxSimpleStarter
npm install
```

### app dispo en dehors du container

Modification pour que l'app de test soit dispo
en dehors du container docker :

Dans le webpack.config.js

```
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: "0.0.0.0",
    disableHostCheck: true
  }
```

### Lancer l'app de test

```bash
npm start
```

with traefik, check project on [http://web.udemyreactredux.docker.localhost/](http://web.udemyreactredux.docker.localhost/) 

without traefik, find ip of the container with docker inspect and go to http://ip:8080

Search in youtube API
---------------------

### Youtube API key

On youtube, get a key for the "Youtube Data API v3"

https://console.developers.google.com

ask for a browser key and for public data.

YOUTUBE_API_KEY = see SECRET.md file

### install youtube sdk

```bash
# add the youtube-api-search in our project
npm install --save youtube-api-search
```


