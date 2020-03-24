var full_expression = process.argv[2];
// console.log(full_expression);
var plus_position;
var equal_position;
for (i = 0; i < full_expression.length; i++){
	// console.log(i);
	if (full_expression[i] == "+") {
		plus_position = i;
	}
	if (full_expression[i] == "=") {
		equal_position = i;
	}
}
// console.log(plus_position);
// console.log(equal_position);

var answer =0;
for (x=0;x<10;x++){
	var first = 0;
	var second = 0;
	var third = 0;
	for (i=0; i< plus_position; i++){
		if (full_expression[i] == "X"){
			first += x * (10**(plus_position - i - 1));
		}
		else{
			first += full_expression[i] * (10**(plus_position - i -1));
		}
	}
	// console.log(first);
	for (i=plus_position+1; i< equal_position; i++){
		if (full_expression[i] == "X"){
			second += x * (10**(equal_position - i - 1));
		}
		else{
			second += full_expression[i] * (10**(equal_position - i -1));
		}
	}
	// console.log(second);
	for (i= equal_position+1; i< full_expression.length; i++){
		if (full_expression[i] == "X"){
			third += x * (10**(full_expression.length - i - 1));
		}
		else{
			third += full_expression[i] * (10**(full_expression.length - i -1));
		}
	}
	// console.log(third);
	// console.log(first + " + "+second + " = " + third);
	if (first+second==third){
		console.log(x);
		answer = 1;
		// break;
	}
}
if (answer==0){
	console.log("NA");
}