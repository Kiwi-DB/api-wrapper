# Kiwi API wrapper

![](https://img.shields.io/github/last-commit/Kiwi-DB/api-wrapper?color=green&label=Last%20commit&style=flat-square)

```ts
const kiwi = new KiwiDB("http://api.kiwidb.io/", "APITOKEN");

kiwi.get("Key").then(res => {
    console.log(res.value)
})
```

## Installation
With NPM: 
```
npm install @kiwidb/api-wrapper
```

With yarn: 
```
yarn add @kiwidb/api-wrapper
```

## Usage
### Instancing KiwiDB
```ts
// url: The api url of the kiwi rest api
// token: the personal token used for accessing the database
const db = new KiwiDB(url, token)
```

### KiwiDB.get(key)
```ts
// Use this method to get a value from the database
// key: key of the value you want to get
db.get(key).then(res => console.log(res.value))
```
`console.log(res.value)` will return the value of the key

### KiwiDB.set(key, value)
```ts
// Use this method to set a value in the database
// key: the key you want to set
// value: the value you want to set the key to
db.set(key, value).then(res => console.log(res.status))
```
`console.log(res.status)` should return a status code 2XX, if not then the key already exists / something bad happened

### KiwiDB.delete(key)
```ts
// Use this method to delete a value from the database
db.delete('The key you want to delete').then(res => console.log(res.status))
```
As before, if a value != than 2XX is returned from `console.log` the key probably doesn't exist