/// <reference types="jest" />

import maxSubarraySum from "./index";

test("Validation [1, 2, 5, 2, 8, 1, 5], 4", () =>{
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
});

test("Validation [1, 2, 5, 2, 8, 1, 5], 2", () =>{
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
});

test("Validation [], 2", () =>{
    expect(maxSubarraySum([], 2)).toBe(null);
});

test("Validation [4, 2, 1, 6], 1", () =>{
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
});

test("Validation [4, 2, 1, 6, 2], 4", () =>{
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
});
