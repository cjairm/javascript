/// <reference types="jest" />

import isValidAnagram from "./index";

test("Validation \"ab\" and \"a\"", () =>{
    expect(isValidAnagram("ab", "a")).toBe(false);
});

test("Validation \"a\" and \"a\"", () =>{
    expect(isValidAnagram("a", "a")).toBe(true);
});

test("Validation \"hello\" and \"llohe\"", () =>{
    expect(isValidAnagram("hello", "llohe")).toBe(true);
});

test("Validation \"12ab34cd\" and \"56ef78gh\"", () =>{
    expect(isValidAnagram("12ab34cd", "56ef78gh")).toBe(false);
});

test("Validation \"aaaaaaaaaaaaaaaauuuuuuuuuuuuuuuuuuuiiiiiiiiiiiiiiiiiiiiii\" and \"iiiiiiiiiiiaaaaaaauuuuiiiiiiiiiiiuuuuuaaaaaaaaauuuuuuuuuu\"", () =>{
    expect(isValidAnagram("aaaaaaaaaaaaaaaauuuuuuuuuuuuuuuuuuuiiiiiiiiiiiiiiiiiiiiii", "iiiiiiiiiiiaaaaaaauuuuiiiiiiiiiiiuuuuuaaaaaaaaauuuuuuuuuu")).toBe(true);
});

test("Validation \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx i\" and \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxi\"", () =>{
    expect(isValidAnagram("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx i", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxi")).toBe(false);
});