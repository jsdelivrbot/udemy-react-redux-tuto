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



