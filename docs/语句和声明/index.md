# 语句和声明

## for...of

for...of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

### 数组

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```

### 字符串

```js
let str = "boo";

for (let value of str) {
  console.log(value);
}
```

### Map

#### 迭代 `[key, value]`

```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]
```

#### 迭代 `value`

```js
for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

## for...in