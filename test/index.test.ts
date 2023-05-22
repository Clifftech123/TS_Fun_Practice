import {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse ,
  minRecurse,
  maxRecurse,
  acc,
  not,
  accPartial,

} from "../Solutions/index";

//1. Identity function
test("takes an argument and returns that argument", () => {
  expect(identity(3)).toBe(3);
});

//2. Write a binary function addb that takes two numbers and returns their sum

test("takes two numbers and returns their sum", () => {
  expect(addb(4, 4)).toBe(8);
});

//3. Write a binary function subb that takes two numbers and returns their difference

test("takes two numbers and returns their difference", () => {
  expect(subb(10, 4)).toBe(6);
});

// 4. Write a binary function mulb that takes two numbers and returns their product.

test("takes two numbers and returns their product", () => {
  expect(mulb(3, 4)).toBe(12);
});

// 5. Write a function minb that takes two numbers and returns the smaller one.

test("takes two numbers and returns the smaller one", () => {
  expect(minb(3, 4)).toBe(3);
});

// 6. Write a function maxb that takes two numbers and returns the larger one.

test("takes two numbers and returns the larger one", () => {
  expect(maxb(3, 4)).toBe(4);
});

// 7. Write a function add that is generalized for any amount of arguments

test("takes any amount of arguments and returns their sum", () => {
  expect(add(1, 2, 4)).toBe(7);
});

// 8. Write a function sub that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () => {
  expect(sub(1, 2, 4)).toBe(-5);
});

// 9. Write a function mul that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () => {
  expect(mul(1, 2, 4)).toBe(8);
});

// 10. Write a function min that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () => {
  expect(min(1, 2, 4)).toBe(1);
});

// 11. Write a function max that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () => {
  expect(max(1, 2, 4)).toBe(4);
});

// 12. Write a function addRecurse that is the generalized add function but uses recursion
test("hat is the generalized add function but uses recursion", () => {
  expect(addRecurse(1, 2, 4)).toBe(7);
});


// 13. Write a function mulRecurse that is the generalized mul function but uses recursion

test("addRecurse is the generalized add function but uses recursion", () => {
  expect(addRecurse(2, 2, 4)).toBe(8);
});


// 14. Write a function minRecurse that is the generalized min function but uses recursion

test("hat is the generalized min function but uses recursion", () => {
expect(minRecurse(1, 2, 4)).toBe(1);
})


// 15. Write a function maxRecurse that is the generalized max function but uses recursion

test("hat is the generalized max function but uses recursion", () => {
  expect(maxRecurse(1, 2, 4)).toBe(4);
})


// 16. Write a function not that takes a function and returns the negation of its result.
test("takes a function and returns the negation of its result", () => {
  const isEven = (x: number) => x % 2 === 0;
  const isOdd = not(isEven);
  expect(isEven(2)).toBe(true);
  expect(isOdd(2)).toBe(false);
  expect(isEven(3)).toBe(false);
  expect(isOdd(3)).toBe(true);
});


// 17. Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result


test("takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result", () => {
  const add = (a: number, b: number) => a + b;
  const addAcc = acc(add, 0);
  expect(addAcc(3, 4)).toBe(7);
})


// 18. Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.



test("takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end", () => {
  const add = (a: number, b: number) => a + b;
  const addAcc = accPartial(add, 1, 3);
  expect(addAcc(1, 2, )).toBe(3);
})

