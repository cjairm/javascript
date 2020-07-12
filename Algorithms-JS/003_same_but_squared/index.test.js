/// <reference types="jest" />

import sameButSquared from "./index";

test("Validation [0, 1, 2, 3], [0, 1, 2, 3]", () =>{
    expect(sameButSquared([0, 1, 2, 3], [0, 1, 2, 3])).toBe(false);
});

test("Validation [1, 1, 1, 10, 10, 10, 5, 5, 5, 3, 3, 3, 2, 2, 2], [100, 100, 100, 25, 25, 25, 9, 9, 9, 4, 4, 4, 1, 1, 1]", () =>{
    expect(sameButSquared([1, 1, 1, 10, 10, 10, 5, 5, 5, 3, 3, 3, 2, 2, 2], [100, 100, 100, 25, 25, 25, 9, 9, 9, 4, 4, 4, 1, 1, 1])).toBe(true);
});

test("Validation [2, 2, 2], [4, 4, 4]", () =>{
    expect(sameButSquared([2, 2, 2], [4, 4, 4])).toBe(true);
});

test("Validation [], []", () =>{
    expect(sameButSquared([], [])).toBe(true);
});

test("Validation [], [1, 2, 3]", () =>{
    expect(sameButSquared([], [1, 2, 3])).toBe(false);
});