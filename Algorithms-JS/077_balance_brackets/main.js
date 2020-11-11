// Add any helper functions you may need here
function isLeft(c) {
  return (c === "(" || c === "{" || c === "[") ? true : false;
}

function isRight(c) {
  return (c === ")" || c === "}" || c === "]") ? true : false;
}

function verifyClosing(curr, arr) {
  if (isRight(curr)
     && (
       arr[arr.length - 1] === "(" && curr === ")" ||
       arr[arr.length - 1] === "{" && curr === "}" ||
       arr[arr.length - 1] === "[" && curr === "]" 
     )) return true
  else return false
}

function isBalanced(s) {
  // Write your code here
  const larr = [],
        arr = [...s]
  
  for(let i = 0; i < arr.length; i++) {
    if (isLeft(arr[i])) larr.push(arr[i])
    else {
      if (larr.length === 0) return false;
      
      if (verifyClosing(arr[i], larr)) larr.pop()
      else return false
    }
  }
  
  return larr.length > 0 ? false : true
}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "{[(])}";
var expected_1 = false;
var output_1 = isBalanced(s_1);
check(expected_1, output_1);

var s_2 = "{{[[(())]]}}";
var expected_2 = true;
var output_2 = isBalanced(s_2);
check(expected_2, output_2);

// Add your own test cases here
var s_3 = "{[()]}";
var expected_3 = true;
var output_3 = isBalanced(s_3);
check(expected_3, output_3);

var s_4 = "{}()";
var expected_4 = true;
var output_4 = isBalanced(s_4);
check(expected_4, output_4);

var s_5 = "{(})";
var expected_5 = false;
var output_5 = isBalanced(s_5);
check(expected_5, output_5);

var s_6 = ")";
var expected_6 = false;
var output_6 = isBalanced(s_6);
check(expected_6, output_6);
