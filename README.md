# fooooty
A game about football on the internet.

##Getting Started
```
./bin/bootstrap
./bin/dev-start
```

##Authorization
By default, /auth is the route for authenticating. Simply POST to it to get a web token. Once you have a web token, you can pass it with subsequent requests to authenticate.

```Authorization: Bearer [token]```
