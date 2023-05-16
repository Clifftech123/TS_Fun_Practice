


//1.  Write a function identity that takes an argument and returns that argument
export const identity = (arg: any) => {
    return arg;
}
const dentity_result = identity(3);
    console.log( dentity_result)         // output: 5


//2. Write a binary function addb that takes two numbers and returns their sum

export const addb = (num1: number, num2: number) => {
    return num1 + num2;
}

const addb_result = addb(4,4);
    console.log(addb_result)           // output: 8