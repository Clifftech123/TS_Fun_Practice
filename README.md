# Typescript Function practice

Welcome to a collection of small and enjoyable functional programming exercises in TypeScript. This repository draws inspiration from JS-fun-Practice, created by the amazing community at Zero to Mastery. Check them out at [Zero to Mastery!](https://zerotomastery.io/).

While Zero to Mastery's [JS-fun-Practice ](https://github.com/zero-to-mastery/JS_Fun_Practice) focused on JavaScript, I've taken up the challenge of reimplementing those exercises in TypeScript. As a result, this repository is entirely TypeScript-based.

Below, you'll find the exercises I've completed so far, and I'll continue to add more over time.

## Solutions Exercises

1.  Write a function identity that takes an argument and returns that argument

```typescript
const identity = (arg: any) => {
  return arg;
};
const dentity_Result = identity(3);
console.log(dentity_Result); // output: 5
```

2.  Write a binary function addb that takes two numbers and returns their sum

```typescript
const addb = (num1: number, num2: number) => {
  return num1 + num2;
};

const addb_Result = addb(4, 4);
console.log(addb_Result); // output:  8
```

3.  Write a binary function subb that takes two numbers and returns their difference

```typescript
export const subb = (num1: number, num2: number) => {
  return num1 - num2;
};

const subb_Result = subb(10, 4);
console.log(subb_Result); // output: 6
```

4. Write a binary function mulb that takes two numbers and returns their product.

```typescript
const mulb = (num1: number, num2: number) => {
  return num1 * num2;
};

const mulb_Result = mulb(3, 4);
console.log(mulb_Result); // output: 12
```

5. Write a function minb that takes two numbers and returns the smaller one.

```typescript
const minb = (num1: number, num2: number) => {
  return Math.min(num1, num2);
};

const minb_Result = minb(3, 4);
console.log(minb_Result); // output: 3
```

6. Write a function maxb that takes two numbers and returns the larger one.

```typescript
const maxb = (num1: number, num2: number) => {
  return Math.max(num1, num2);
};
const maxb_Result = maxb(3, 4);
console.log(maxb_Result); // output: 4`

```

7. Write a function add that is generalized for any amount of arguments

```typescript
 const add = (...args: number[]) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const add_Result = add(1, 2, 4);
console.log(add_Result); // output: 7

```

8. Write a function sub that is generalized for any amount of arguments

```typescript
 const sub = (...args: number[]) => {
  return args.reduce((acc, curr) => acc - curr);
};

const sub_Result = sub(1, 2, 4);
console.log(sub_Result); // output: -5

```


9. Write a function mul that is generalized for any amount of arguments

```typescript

const mul = (...args: number[]) => {
  return args.reduce((acc, curr) => acc * curr);
};

const mul_Result = mul(1, 2, 4);
console.log(mul_Result); // output: 8

```

10. Write a function min that is generalized for any amount of arguments

```typescript


const min = (...args: number[]) => {
  return args.reduce((acc, curr) => Math.min(acc, curr));
};

const min_Result = min(1, 2, 4);
console.log(min_Result); // output: 1

```

11. Write a function max that is generalized for any amount of arguments

```typescript

const max = (...args: number[]) => {
  return args.reduce((acc, curr) => Math.max(acc, curr));
};

const max_Result = max(1, 2, 4);
console.log(max_Result); // output: 4

```


