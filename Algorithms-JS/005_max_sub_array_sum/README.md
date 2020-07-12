# Description

Write a function called "MaxSubArraySum", which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.

# Example Output

| Input              | Output  |
|:------------------:|:-------:|
| [1,2,5,2,8,1,5], 2 | 10      |
|                    |         |
| [1,2,5,2,8,1,5], 4 | 17      |
|                    |         |
| [4,2,1,6], 1       | 6       |
|                    |         |
| [4,2,1,6,2], 4     | 13      |
|                    |         |
| [], 4              | null    |

# Pseudo code

This was my thinking before resolve the problem.
```
Create a function called MaxSubArraySum

	Check array if "n" is bigger than array length return null.

	Take the number of elements "n" from the array and sum them.

	Create variable "currVal" and save the sum
	Create variable "tempVal" and compare with currVal

	Create a loop starting at "n" position in the array

		Check for the tempVal compared with currVal

```

# How it works?

```
// Inputs [1,2,5,2,8,1,5], 2

initial state
// |
// [1, 2, 5, 2, 8, 1, 5] take two numbers at the begining
//      |
// tempVal = 3
// newTempVal = 3

2 state
//    |      
// [1, 2, 5, 2, 8, 1, 5] 3 - 1(last element) + 5(new element)
//         |
// tempVal = 3
// newTempVal = 7

3 state
//       |      
// [1, 2, 5, 2, 8, 1, 5] 5 - 2(last element) + 2(new element)
//            |
// tempVal = 7
// newTempVal = 7

4 state
//          |      
// [1, 2, 5, 2, 8, 1, 5] 7 - 5(last element) + 8(new element)
//               |
// tempVal = 7
// newTempVal = 10

...states

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