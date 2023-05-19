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
 const add = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

const add_Result = add(1, 2, 4);
console.log(add_Result); // output: 7

```

8. Write a function sub that is generalized for any amount of arguments

```typescript
 const sub = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc - curr);
};

const sub_Result = sub(1, 2, 4);
console.log(sub_Result); // output: -5

```


9. Write a function mul that is generalized for any amount of arguments

```typescript

const mul = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc * curr);
};

const mul_Result = mul(1, 2, 4);
console.log(mul_Result); // output: 8

```

10. Write a function min that is generalized for any amount of arguments

```typescript


const min = (...nums: number[]) => {
  return nums.reduce((acc, curr) => Math.min(acc, curr));
};

const min_Result = min(1, 2, 4);
console.log(min_Result); // output: 1

```

11. Write a function max that is generalized for any amount of arguments

```typescript

const max = (...nums: number[]) => {
  return nums.reduce((acc, curr) => Math.max(acc, curr));
};

const max_Result = max(1, 2, 4);
console.log(max_Result); // output: 4

```


12. Write a function addRecurse that is the generalized add function but uses recursion

```typescript

const addRecurse = (...nums: number[]):number => {
  if (nums.length === 1) return nums[0];
  return nums[0] + addRecurse(...nums.slice(1));
};

const addRecurse_Result = addRecurse(1, 2, 4);
console.log(addRecurse_Result); // output: 7

```


13. Write a function mulRecurse that is the generalized mul function but uses recursion
```typescript

 const mulRecurse = (...nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  return nums[0] * mulRecurse(...nums.slice(1));
};

// example usage
const mulRecurse_Result = mulRecurse(2, 2, 4);
console.log(mulRecurse_Result); // output: 8

```
14. Write a function minRecurse that is the generalized min function but uses recursion

```typescript
const minRecurse = (...nums: number[]): number => {
  if (nums.length === 1) {
    return nums[0];
  }
  const minn = minRecurse(...nums.slice(1));
  return Math.min(nums[0], minn);
};

// example usage
const minRecurse_Result = minRecurse(1, 2, 4);
console.log(minRecurse_Result); // output: 2

```


15. Write a function maxRecurse that is the generalized max function but uses recursion

```typescript

export const maxRecurse = (...nums: number[]): number => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const maxx = maxRecurse(...nums.slice(1));
    return Math.max(nums[0], maxx);
  }
};

//  example usage
const maxRecurse_Result = maxRecurse(1, 2, 4);
console.log(maxRecurse_Result); // output: 4

```


16. Write a function not that takes a function and returns the negation of its result

```typescript

 function not<T>(f: (x: T) => boolean): (x: T) => boolean {
  return (x: T) => !f(x);
}

// Easy  ussage
const isEven = (x: number) => x % 2 === 0;
const isOdd = not(isEven);
console.log(isEven(2)); // true
console.log(isOdd(2)); // false 

```



17. Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

```typescript


type AccumulatorFunction<T, R> = (acc: R, val: T) => R;

  export  function acc<T, R>(
  fn: AccumulatorFunction<T, R>,
  initialValue: R
): AccumulatorFunction<T, R> {
  return (acc: R, val: T) => fn(acc, val);
}

// Example usage
const sum: AccumulatorFunction<number, number> = (acc, val) => acc + val;
const accumulator = acc(sum, 0);
console.log(accumulator(1, 2)); // Output: 3
console.log(accumulator(3, 4)); // Output: 7
console.log(accumulator(5, 6)); // Output: 11

```
