/// <reference types="jest" />

import getCountOfUniqueValues from "./index";

test("Validation [1,2,3,4,4,4,7,7,12,12,13]", () =>{
    expect(getCountOfUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7);
});

test("Validation [-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,1,2,3,4,4,4,7,7,12,12,13]", () =>{
    expect(getCountOfUniqueValues([-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,1,2,3,4,4,4,7,7,12,12,13])).toBe(9);
});

test("Validation [-1,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10]", () =>{
    expect(getCountOfUniqueValues([-1,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10])).toBe(12);
});

test("Validation []", () =>{
    expect(getCountOfUniqueValues([])).toBe(0);
});

test("Validation [1,1]", () =>{
    expect(getCountOfUniqueValues([1,1])).toBe(1);
});

test("Validation [1,2]", () =>{
    expect(getCountOfUniqueValues([1,2])).toBe(2);
});

test("Validation [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,90000]", () =>{
    expect(getCountOfUniqueValues([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,90000])).toBe(3);
});