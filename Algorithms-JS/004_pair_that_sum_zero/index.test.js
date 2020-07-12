/// <reference types="jest" />

import sumZero from "./index";

test("Validation [-10, -5, -1, 0, 1, 2, 3]", () =>{
    expect(sumZero([-10, -5, -1, 0, 1, 2, 3])).toStrictEqual([-1, 1]);
});

test("Validation [-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]", () =>{
    expect(sumZero([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19])).toBe(undefined);
});

test("Validation []", () =>{
    expect(sumZero([])).toBe(undefined);
});

test("Validation [1, 2]", () =>{
    expect(sumZero([1, 2])).toBe(undefined);
});

test("Validation [-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19]", () =>{
    expect(sumZero([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19])).toStrictEqual([-2, 2]);
});