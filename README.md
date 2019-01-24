
# Iterable-tool

## Functions

> ### [range](#Range)
> ### [iter](#Iter)

### Range
That function like range from python. You can create a slice by function-generation and use all features like for..of construction and ...spread operator.
#### Example
```js
const {range} = require('iterable-tool');

console.log(...range(5));      // 0  1  2  3  4
console.log(...range(1, 5));   // 1  2  3  4
console.log(...range(1, 10, 2) // 1  3  5  7  9
console.log(...range(10, 1, 3) // 10 7  4
```

### Iter
That function just create iterator by arguments. You can just use method .next() by standart interface Iterable for REST api.
#### Example
```js
const {iter} = require('iterable-tool');
const app = require('./app');

const phrazes = iter('Hello', 'World');
app.use('/intro', (req, res) => {
	const phrase = phrazes.next();
	if (!phrase) res.sendStatus(500);
	else res.send(phrase);
}
```
