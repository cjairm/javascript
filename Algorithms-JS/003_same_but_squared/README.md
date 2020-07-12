# Description

Write a function called "SameButSquared", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency if values must be the same. 

# Example Output

| Input                  | Output        |
|:----------------------:|:-------------:|
| [1,2,3], [4,1,9]       | True          |
|                        |               |
| [1,2,3], [1,9]         | False         |
|                        |               |
| [1,2,1], [4,4,1]       | False         |
|                        |               |
| [9,9,1,3], [81,1,9,81] | True          |

# Pseudo code

This was my thinking before resolve the problem.
```
Create a function called "SameButSquared"

    If the length are different stop the script and return false

    Create frequency variable helper called fq1

    Create another frequency variable helper called fq2

    Iterate first array

        If element of the array exists in fq1

            Increment the key of fq1

        If element of the array NOT exists in fq1

            Create new element in fq1 with key name same as the element of the array 

    Iterate second array

        If element of the array exists in fq2

            Increment the key of fq2

        If element of the array NOT exists in fq2

            Create new element in fq2 with key name same as the element of the array 

    Iterate fq1 helper that was created
    
        If the current key value does NOT exists the array fq2 stop the script and return false

        If the current value does NOT match with same value but squared stop the script and retur false
```

# How it works?

```
// Inputs [1,2], [1,4]

initial state
// fq1  
// [1: 1, 2: 1]
//
// fq2
// []

2 state
// fq1  
// [1: 1, 2: 1]
//
// fq2
// [1: 1, 4: 1]

final state
// compare fq1 y fq2
```

# How to use it

* Download main.go and main_test.go
* Save them in some folder
* Run `go run main.go`
	* To run test `go test`

# Author

Carlos Mendez

## Why 0(n)?

This is just to obtain vizually how fast is the program, and is called Big O notation.

### Created at 

Jul 9, 2020

### Same algorithm, different languages

* [Golang](https://github.com/cjairm/go/tree/master/Algorithms-Go/003_same_but_squared)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py/003_same_but_squared)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS/003_same_but_squared)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp/003_same_but_squared)