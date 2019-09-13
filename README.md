# Fake server for CZ3002 project

## Run server

Run
```sh
node fake-server.js
```

then the server will be accessible at http://localhost:8080.

## How is `data.json` structured

`data.json` is structured as follow:

```
{
  PATHNAME: {
      QUERYKEY: {
        QUERYVALUE: RESPONSE
      }
  }
}
```

For example, if `data.json` contains the follows:
```
{
    "/students": {
      "sid": {
        "1": {name: "Ah Ming"}
      }
    }
}
```

then requests to `http://localhost:8080/students?sid=1` will return `{name: "Ah Ming"}`.
