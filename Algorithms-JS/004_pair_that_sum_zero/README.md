# Description

Write a function called "SumZero", which accepts a `sorted` array of integers. The function should find the `first` pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exists.

# Example Output

| Input              | Output        |
|:------------------:|:-------------:|
| [-3,-2,-1,0,1,2,3] | [-3,3]        |
|                    |               |
| [-2,0,1,3]         | undefined     |
|                    |               |
| [1,2,3]            | undefined     |
|                    |               |
| [-100,-8,0,1,100]  | [-100,100]    |

# Pseudo code

This was my thinking before resolve the problem.
```
Create a function called SumZero

Check the length of the array. If the length is zero or one return undefined

Create one helper variable called hr that starts at the beggining of the array

Create another helper variable called hl that starts at the end of the array

Create a loop while hr is greater than hl

    Sum two variables - array at position hr plus array at position hl

    If the sum is equal to zero return [array at position hr, array at position hl]

    If the sum is greater than zero decrement in one hr

    If the sum is lower than zero increment in one hl
```

# How it works?

```
// Input [-4,-3,-1,0,1,2,5]

initial state
//  hr  
// [-4, -3, -1, 0, 1, 2, 5]
//                       hl

2 state
//  hr  
// [-4, -3, -1, 0, 1, 2, 5]
//                   hl

3 state
//      hr 
// [-4, -3, -1, 0, 1, 2, 5]
//                   hl 

4 state
//          hr  
// [-4, -3, -1, 0, 1, 2, 5]
//                   hl

final state
//          hr  
// [-4, -3, -1, 0, 1, 2, 5]
//                hl
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

Jul 10, 2020

### Same algorithm, different languages

* [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS/004_pair_that_sum_zero)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py/004_pair_that_sum_zero)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS/004_pair_that_sum_zero)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp/004_pair_that_sum_zero)