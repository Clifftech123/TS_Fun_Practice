
import   {
    identity,
    addb,
    subb,
    mulb,
    minb
  
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


// 5. Write a binary function mulb that takes two numbers and returns their product.

test("takes two numbers and returns their product", () =>{
    expect(mulb(3,4)).toBe(12);
})


// 6. Write a function minb that takes two numbers and returns the smaller one.

test("takes two numbers and returns the smaller one", () =>{
    expect(minb(3,4)).toBe(3);
})