//1.  Write a function identity that ta
//1.  Write a function identity that takes an argument and returns that argument
export const identity = (arg: any) => {
  return arg;
};
const dentity_Result = identity(3);
console.log(dentity_Result); // output: 5

//2. Write a binary function addb that takes two numbers and returns their sum

export const addb = (num1: number, num2: number) => {
  return num1 + num2;
};

// example usage
const addb_Result = addb(4, 4);
console.log(addb_Result); // output:

//3. Write a binary function subb that takes two numbers and returns their difference
export const subb = (num1: number, num2: number) => {
  return num1 - num2;
};

// example usage
const subb_Result = subb(10, 4);
console.log(subb_Result); // output: 6

//4. Write a binary function mulb that takes two numbers and returns their product.

export const mulb = (num1: number, num2: number) => {
  return num1 * num2;
};

// example usage
const mulb_Result = mulb(3, 4);
console.log(mulb_Result); // output: 12
//5. Write a function minb that takes two numbers and returns the smaller one.

export const minb = (num1: number, num2: number) => {
  return Math.min(num1, num2);
};

const minb_Result = minb(3, 4);
console.log(minb_Result); // output: 3

//6. Write a function maxb that takes two numbers and returns the larger one.
export const maxb = (num1: number, num2: number) => {
  return Math.max(num1, num2);
};
const maxb_Result = maxb(3, 4);
console.log(maxb_Result); // output: 4

//7. Write a function add that is generalized for any amount of arguments
export const add = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

const add_Result = add(1, 2, 4);
console.log(add_Result); // output: 7

//8. Write a function sub that is generalized for any amount of arguments
export const sub = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc - curr);
};

// example usage
const sub_Result = sub(1, 2, 4);
console.log(sub_Result); // output: -5

//9. Write a function mul that is generalized for any amount of arguments

export const mul = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc * curr);
};

//  10. Write a function min that is generalized for any amount of arguments

export const min = (...nums: number[]) => {
  return Math.min(...nums);
};

// example usage
const min_Result = min(1, 2, 4);
console.log(min_Result); // output: 1

//  11. Write a function max that is generalized for any amount of arguments

export const max = (...nums: number[]) => {
  return Math.max(...nums);
};

const max_Result = max(1, 2, 4);
console.log(max_Result); // output: 4

// 12. Write a function addRecurse that is the generalized add function but uses recursion

export const addRecurse = (...nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  return nums[0] + addRecurse(...nums.slice(1));
};
// example usage
const addRecurse_Result = addRecurse(2, 2, 4);
console.log(addRecurse_Result); // output: 7

// 13. Write a function mulRecurse that is the generalized mul function but uses recursion
export const mulRecurse = (...nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  return nums[0] * mulRecurse(...nums.slice(1));
};

// example usage
const mulRecurse_Result = mulRecurse(2, 2, 4);
console.log(mulRecurse_Result); // output: 8

// 14. Write a function minRecurse that is the generalized min function but uses recursion
export const minRecurse = (...nums: number[]): number => {
  if (nums.length === 1) {
    return nums[0];
  }
  const minn = minRecurse(...nums.slice(1));
  return Math.min(nums[0], minn);
};

// example usage
const minRecurse_Result = minRecurse(1, 2, 4);
console.log(minRecurse_Result); // output: 2

// 15. Write a function maxRecurse that is the generalized max function but uses recursion
export const maxRecurse = (...nums: number[]): number => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const maxx = maxRecurse(...nums.slice(1));
    return Math.max(nums[0], maxx);
  }
};



export function not<T>(f: (x: T) => boolean): (x: T) => boolean {
  return (x: T) => !f(x);
}

// Easy  ussage
const isEven = (x: number) => x % 2 === 0;
const isOdd = not(isEven);
console.log(isEven(2)); // true
console.log(isOdd(2)); // false

// 17. Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
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


// 18 Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.


export function accPartial<T, R>(
  fn: AccumulatorFunction<T, R>,
  start: number,
  end: number
): AccumulatorFunction<T, R> {
  return (acc: R, val: T) => {
    if (start <= end) {
      return fn(acc, val);
    }
    return acc;
  };
}


// Example usage

const accumulator2 = accPartial(sum, 1, 3);
console.log(accumulator2(1, 2)); // Output: 3
console.log(accumulator2(3, 4)); // Output: 7
console.log(accumulator2(5, 6)); // Output: 7



// 19. Write a functi


