
import   {
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
    max
    



  
}from '../Solutions/index';


//1. Identity function    
test("takes an argument and returns that argument", () =>{
    expect(identity(3)).toBe(3);
})

//2. Write a binary function addb that takes two numbers and returns their sum

test("takes two numbers and returns their sum", () =>{
    expect(addb(4,4)).toBe(8);
})


//3. Write a binary function subb that takes two numbers and returns their difference

test("takes two numbers and returns their difference", () =>{
    expect(subb(10,4)).toBe(6);
})


// 4. Write a binary function mulb that takes two numbers and returns their product.

test("takes two numbers and returns their product", () =>{
    expect(mulb(3,4)).toBe(12);
})


// 5. Write a function minb that takes two numbers and returns the smaller one.

test("takes two numbers and returns the smaller one", () =>{
    expect(minb(3,4)).toBe(3);
})



// 6. Write a function maxb that takes two numbers and returns the larger one.

test("takes two numbers and returns the larger one", () =>{
    expect(maxb(3,4)).toBe(4);
}
)

// 7. Write a function add that is generalized for any amount of arguments

test("takes any amount of arguments and returns their sum", () =>{
    expect(add(1,2,4)).toBe(7);
})


// 8. Write a function sub that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () =>{
    expect(sub(1,2,4)).toBe(-5);
})


// 9. Write a function mul that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () =>{
    expect(mul(1,2,4)).toBe(8);
})

// 10. Write a function min that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () =>{
    expect(min(1,2,4)).toBe(1);
})


// 11. Write a function max that is generalized for any amount of arguments

test("hat is generalized for any amount of arguments", () =>{
    expect(max(1,2,4)).toBe(4);
})

