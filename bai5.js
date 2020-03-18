'use strict';
let arr = [];
for (const arg of process.argv.slice(2)) {
    arr.push(arg);
}
let a1=Array.from(arr[0]);
let a2=Array.from(arr[2]);
let a3=Array.from(arr[4]);
let length_a1 = a1.length;
let length_a2 = a2.length;
let length_a3 = a3.length;
var value_of_a1=0;
var value_of_a2=0;
var value_of_a3=0;

let j=[];
let j3=[];

for(let i = 0; i < length_a1; i++){
	if ( a1[i] != "x") {
		value_of_a1 += Number(a1[i])*(Math.pow(10,length_a1-i-1));
	} else j.push(length_a1-i-1);
}

for(let i = 0; i < length_a2; i++){
	if (a2[i] != "x") {
		value_of_a2 += Number(a2[i])*(Math.pow(10,length_a2-i-1));
	} else j.push(length_a2-i-1);
}

for(let i = 0; i < length_a3; i++){
	if (a3[i] != "x") {
		value_of_a3 += Number(a3[i])*(Math.pow(10,length_a3-i-1));
	} else j3.push(length_a3-i-1);
}
let flag = false;
let k = 0;
while(0 <= k && k < 10){
	let s12 =0;//tong cua x^n trong so hang 1 va 2
	let s3 =0;// tong cura x^n trong so hang 3

	for(const value of j){
		s12 += k*(Math.pow(10,value))
	}

	for(const value of j3){
		s3 += k*(Math.pow(10,value))
	}
	if((value_of_a1 + value_of_a2 + s12 )==(value_of_a3 + s3)){
		console.log("gia tri can tim la :"+ k);
    flag = true;
		break;
  }
  k++;
}

if(flag == false) {
  console.log("NA");
}

