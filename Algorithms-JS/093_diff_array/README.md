This algorithm is about to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```
Examples:

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]) should return ["pink wool"].

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return an array with one item.

 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].
```
