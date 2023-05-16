# Typescript Function practice


A list of small & fun functional programming exercises in  typescript . This repo was inspired by [JS-fun-Practice](https://github.com/zero-to-mastery/JS_Fun_Practice)  

Zero to mastery is a great community of developers, check them out! here [zero-to-mastery](https://github.com/zero-to-mastery)



Zero to mastery JUS-fun-Practice  was javascript based, I decided to do the same exercises in typescript . So This repo is typescript based.


Below are the exercises, I will be adding more as I go along. Feel free to contribute and add more exercises.

You can find the solutions in the solutions folder.
You also find  the exercises  here [typescript-exercises](Exercises.md)

The is  the markdown file for the exercises [typescript-exercises](Exercises.md). 
you can find the code in the solutions folder. And all the test in the test folder.


##   Solutions   Exercises  

1.    Write a function identity that takes an argument and returns that argument

```typescript
export const identity = (arg: any) => {
    return arg;
}
const dentity_result = identity(3);
    console.log( dentity_result)         // output: 5



```

2.  Write a binary function addb that takes two 
numbers and returns their sum

```typescript
export const addb = (num1: number, num2: number) => {
    return num1 + num2;
}

const addb_result = addb(4,4);
    console.log(addb_result)           // output: 8

``` 


