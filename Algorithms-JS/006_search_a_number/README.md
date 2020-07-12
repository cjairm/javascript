# Description

Given a `sorted` array of integers, write a function called "SearchNumber", that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

# Example Output

| Input              | Output  |
|:------------------:|:-------:|
| [1,2,3,4,5,6], 4   | 3       |
|                    |         |
| [1,2,3,4,5,6], 6   | 5       |
|                    |         |
| [1,2,3,4,5,6], 11  | -1      |

# Pseudo code

This was my thinking before resolve the problem.
```
Create a function called "SearchNumber"

If the array received contains zero elements stop the program ans return -1

If the array received contains one element stop the program and return 1

Init a pointer at the end of the array and another one at the beggining of the array.

Init a loop while max pointer is bigger than min pointer

	Get the middle of the array

	(Check middle value)

	If middle value is bigger than searched number move max pointer to left (middle pointer - 1)

	If middle value is lower than searched number move min pointer to right (middle pointer + 1)

	if Equal return position (middle index)
```

# How it works?

```
// Inputs [1,2,3,4,5,6], 4

initial state
// [1,2,3,4,5,6]

2 state
// [1,2,3,|4,5,6|]

3 state
// [1,2,3,|4,5|,6]

final state
// [1,2,3,|4|,5,6]

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

Jul 12, 2020

### Same algorithm, different languages

* [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS/004_pair_that_sum_zero)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py/004_pair_that_sum_zero)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS/004_pair_that_sum_zero)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp/004_pair_that_sum_zero)