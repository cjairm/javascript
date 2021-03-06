/// <reference types="jest" />

import searchNumber from "./index";

test("Validation [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], -90", () =>{
    expect(searchNumber([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], -90)).toBe(1);
});

test("Validation [-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19", () =>{
    expect(searchNumber([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19)).toBe(20);
});

test("Validation [], 10", () =>{
    expect(searchNumber([], 10)).toBe(-1);
});

test("Validation [1, 2], 2", () =>{
    expect(searchNumber([1, 2], 2)).toBe(1);
});

test("Validation [-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19], 30", () =>{
    expect(searchNumber([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19], 30)).toBe(-1);
});


