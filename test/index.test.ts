
import   {
    identity,
    addb,
  
}from '../Solutions/index';


//1. Identity function    
test("takes an argument and returns that argument", () =>{
    expect(identity(3)).toBe(3);
})

//2. Write a binary function addb that takes two numbers and returns their sum

test("takes two numbers and returns their sum", () =>{
    expect(addb(4,4)).toBe(8);
})