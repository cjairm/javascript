// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
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

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here
var input_3 = "Zebra-493?";
var rotationFactor_3 = 3;
var expected_3 = "Cheud-726?";
var output_3 = rotationalCipher(input_3, rotationFactor_3);
check(expected_3, output_3);

var input_4 = "abcdefghijklmNOPQRSTUVWXYZ0123456789";
var rotationFactor_4 = 39;
var expected_4 = "nopqrstuvwxyzABCDEFGHIJKLM9012345678";
var output_4 = rotationalCipher(input_4, rotationFactor_4);
check(expected_4, output_4);
