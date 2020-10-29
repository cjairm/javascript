function printString(str) {
	var out = '["' + str + '"]';
	return out;
}

var test_case_number = 1;

function check(expected, output) {
	var result = expected == output;
	var rightTick = "\u2713";
	var wrongTick = "\u2717";
	if (result) {
		var out = rightTick + " Test #" + test_case_number;
		console.log(out);
	} else {
		var out = "";
		out += wrongTick + " Test #" + test_case_number + ": Expected ";
		out += printString(expected);
		out += " Your output: ";
		out += printString(output);
		console.log(out);
	}
	test_case_number++;
}

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];
var expected_1 = true;
var output_1 = areTheyEqual(array_a_1, array_b_1);
check(expected_1, output_1);

var array_a_2 = [1, 2, 3, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = false;
var output_2 = areTheyEqual(array_a_2, array_b_2);
check(expected_2, output_2);

// Add your own test cases here
var array_a_3 = [];
var array_b_3 = [];
var expected_3 = true;
var output_3 = areTheyEqual(array_a_3, array_b_3);
check(expected_3, output_3);

var array_a_4 = [100000, 100000, 100000, 100000, 100000, 100000];
var array_b_4 = [100000, 100000, 100000, 100000, 100000, 100000];
var expected_4 = true;
var output_4 = areTheyEqual(array_a_4, array_b_4);
check(expected_4, output_4);

var array_a_5 = [100000, 100000, 100000, 100000, 100000, 2];
var array_b_5 = [1, 100000, 100000, 100000, 100000, 100000];
var expected_5 = false;
var output_5 = areTheyEqual(array_a_5, array_b_5);
check(expected_5, output_5);
