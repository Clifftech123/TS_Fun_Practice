# Typescript Function practice


A list of small & fun functional programming exercises in  typescript . This repo was inspired by [JS-fun-Practice](https://github.com/zero-to-mastery/JS_Fun_Practice)  

Zero to mastery is a great community of developers, check them out! here [zero-to-mastery](https://github.com/zero-to-mastery)



Zero to mastery JUS-fun-Practice  was javascript based, I decided to do the same exercises in typescript . So This repo is typescript based.


Below are the exercises, I will be adding more as I go along. Feel free to contribute and add more exercises.

You can find the solutions in the solutions folder.
You also find  the exercises  here 

The is  the markdown file for the exercises.
you can find the code in the solutions folder. And all the test in the test folder.


##   Solutions   Exercises  




1.  Write a function identity that takes an argument and returns that argument

```typescript
 const identity = (arg: any) => {
    return arg;
}
const dentity_Result = identity(3);
    console.log( dentity_Result)         // output: 5

```

 2. Write a binary function addb that takes two numbers and returns their sum

```typescript
 const addb = (num1: number, num2: number) => {
    return num1 + num2;
}

const addb_Result = addb(4,4);
    console.log(addb_Result)           // output:  8

```

 3. Write a binary function subb that takes two numbers and returns their difference

```typescript
export const subb = (num1: number, num2: number) => {
    return num1 - num2;
}

const subb_Result = subb(10,4);
    console.log(subb_Result)           // output: 6 
```

4. Write a binary function mulb that takes two numbers and returns their product.


```typescript
 const mulb = (num1: number, num2: number) => {
    return num1 * num2;
}


const mulb_Result = mulb(3,4);
    console.log(mulb_Result)           // output: 12

```


5. Write a function minb that takes two numbers and returns the smaller one.

```typescript
 const minb = (num1: number, num2: number) => {
    return Math.min(num1, num2);
}

const minb_Result = minb(3,4);
    console.log(minb_Result)           // output: 3

```
