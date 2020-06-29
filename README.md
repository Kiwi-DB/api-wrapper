# Kiwi API wrapper

![](https://img.shields.io/github/last-commit/Kiwi-DB/api-wrapper?color=green&label=Last%20commit&style=flat-square)

## Installation
With NPM: `npm install @kiwidb/api-wrapper`

With yarn: `yarn add @kiwidb/api-wrapper`

## Usage
### KiwiDB.get(key)
Use this method to get a value from the database
```ts
db.get('The key you want to get').then(res => console.log(res.value))
```
`console.log(res.value)` will return the value of the key

### KiwiDB.set(key, value)
Use this method to set a value in the database
```ts
db.set('The key you want to set', 'the value').then(res => console.log(res.status))
```
`console.log(res.status)` should return a status code 2XX, if not then the key already exists / something bad happened

### KiwiDB.delete(key)
Use this method to delete a value from the database
```ts
db.delete('The key you want to delete').then(res => console.log(res.status))
```
As before, if a value != than 2XX is returned from `console.log` the key probably doesn't exist

## Example usage
```ts
import kiwi from '@kiwidb/api-wrapper';
const db = new kiwi("https://api.kiwidb.io/", "API_TOKEN");

db.get("testkey").then(value => console.log(value))
```