


//1.  Write a function identity that takes an argument and returns that argument
export const identity = (arg: any) => {
    return arg;
}
const dentity_Result = identity(3);
    console.log( dentity_Result)         // output: 5


//2. Write a binary function addb that takes two numbers and returns their sum

export const addb = (num1: number, num2: number) => {
    return num1 + num2;
}

const addb_Result = addb(4,4);
    console.log(addb_Result)           // output: 


//3. Write a binary function subb that takes two numbers and returns their difference
export const subb = (num1: number, num2: number) => {
    return num1 - num2;
}

const subb_Result = subb(10,4);
    console.log(subb_Result)           // output: 6 


//4. Write a binary function mulb that takes two numbers and returns their product.

export  const mulb = (num1: number, num2: number) => {
    return num1 * num2;
}


const mulb_Result = mulb(3,4);
    console.log(mulb_Result)           // output: 12



//5. Write a function minb that takes two numbers and returns the smaller one.

export const minb = (num1: number, num2: number) => {
    return Math.min(num1, num2);
}

const minb_Result = minb(3,4);
    console.log(minb_Result)           // output: 3