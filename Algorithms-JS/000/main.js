function StringChallenge(str) {
    const op = [];
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        const currWord = str.split("").slice(temp, i + 1);
        const cnvt = str2Num(currWord.join(""));
        if (cnvt !== undefined) {
            op.push(cnvt);
            temp = i + 1;
        }
    }

    const result = operation(op);

    const result2String = [];
    if (result < 0) {
        result2String.push("negative");
    }
    const resultArr = Math.abs(result).toString().split("");
    for (let k = 0; resultArr.length > k; k++) {
        result2String.push(num2Str(+resultArr[k]));
    }

    return result2String.join("");
}

function operation(arr) {
    const ops = [];
    const nums = arr
        .join("")
        .split("+")
        .join(",")
        .split("-")
        .join(",")
        .split(",");
    let result = undefined;

    for (let i = 0; arr.length > i; i++) {
        if (arr[i] == "+" || arr[i] == "-") ops.push(arr[i]);
    }

    let sp = 0;
    if (ops.length > 0) {
        for (let j = 0; nums.length > j; j++) {
            if (result === undefined) {
                result = +nums[j];
                continue;
            }

            if (ops[sp] == "+") {
                result += +nums[j];
            } else {
                result -= +nums[j];
            }
            sp++;
        }
    } else {
        return nums[0];
    }

    return result;
}

function str2Num(str) {
    switch (str) {
        case "zero":
            return 0;
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "minus":
            return "-";
        case "plus":
            return "+";
        case "negative":
            return -1;
        default:
            return undefined;
    }
}

function num2Str(num) {
    switch (num) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case "-":
            return "minus";
        case "+":
            return "plus";
        case -1:
            return "negative";
        default:
            return undefined;
    }
}

// keep this function call here
console.log(StringChallenge(readline()));


// String Challenge

// Have the function StringChallenge(str) read the str parameter being passed 
// which will contain the written out version of the numbers 0-9 and the words 
// "minus" or "plus" and convert the expression into an actual final number written 
// out as well. For example: if str is "foursixminustwotwoplusonezero" then this 
// converts to "46 - 22 + 10" which evaluates to 34 and your program should return 
// the final string threefour. If your final answer is negative it should include 
// the word "negative."


// Examples

// Input: "onezeropluseight"
// Output: oneeight

// Input: "oneminusoneone"
// Output: negativeonezero