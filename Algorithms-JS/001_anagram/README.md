# Description

Given two strings, write a function to determine if the second string is an anagramof the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as, "cinema" formed from "iceman".

# Example Output

| Input                 | Output        |
|:---------------------:|:-------------:|
| "", ""                | True          |
|                       |               |
| "aaz", "zza"          | False         |
|                       |               |
| "anagram", "nagaram"  | True          |
|                       |               |
| "awesome", "awesom"   | False         |

# Pseudo code

This was my thinking before resolve the problem.
```
create function called "isAnagramValid"

    if both strings has the same length... we continue

    Iterate first string and save how many letters exists

    Iterate second string and save how many letter exists

    Iterate first new array/object created

        if the letter exists. Continue

        If number of characters exists. Continue

    Return true
```

# How to use it
* Download index .html and .js
* Save them in some folder
* Run in your preferred browser the index.html

## Why 0(n)?
This is just to obtain vizually how fast is the program, and is called Big O notation.

### Same algorithm, different languages

* [Golang](https://github.com/cjairm/go/tree/master/Algorithms-Go)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp)