# Loki Mock Server

## Contents

## Setup

```js
// index.js
const loki = require('loki-mock');

loki.start();
```

```js
var lokiConfig = {
    port: 6060,
    resourcesPath: __dirname + '/custom-folder/loki'
}

loki.start(lokiConfig);
```

You can see all the possible configurations and their default values [down below](#configuration).

## Usage

> **Warning!** This is only for local development and should not be used for applications in production.

### Configuration 

## Contributing

