
const {
    returnTwo,
    greeting,
    add,
    multiply, 
    divide, 
    subtract
} = require("./functions.js");
    
test("should return 2", ()=> {
    expect(returnTwo()).toBe(2);
});

test("should return greeting", ()=> {
    expect(greeting("Sainab")).toBe("Hello, Sainab.");
    expect(greeting("Jill")).toBe ("Hello, Jill.");
});
test ("should return 3", ()=>{
    expect (add(1, 2)).toBe (3)
    expect (add(5, 9)).toBe (14)
});

describe ("Math functions",()=>{
    test ("should subtract", ()=>{
        expect (subtract(6, 2)).toBe (4)
        expect (subtract(9, 5)).toBe (4)
    });
    test ("should multiply", ()=>{
        expect (multiply(6, 2)).toBe (12)
        expect (multiply(4, 4)).toBe (16)
    });
    test ("should divide", ()=>{
        expect (divide(16, 4)).toBe (4)
        expect (divide(9, 3)).toBe (3)
    });
})
