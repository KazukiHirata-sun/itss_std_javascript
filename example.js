#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

function check(arr){
	let len = arr.length;
	let q = len - 1;
	let tong = [0, 0];
	for(let i= 0; i< len; i++){
		if( arr[i] == 'X'){
			tong[0] += Math.pow(10,q);
		}
		else{
			tong[1] += arr[i]* Math.pow(10,q);
		}
		q--;
	}
	return tong;
}

var str = process.argv[2];
// console.log(str);

var n = str.indexOf("+");
var m = str.indexOf("=");
var l = str.length;

// a+b=c
var a = str.slice(0,n);
var b = str.slice(n+1,m);
var c = str.slice(m+1,l);

var tonga = check(a);
var tongb = check(b);
var tongc = check(c);

var tu = tongc[1] - tongb[1] - tonga[1];
var mau =  tonga[0] + tongb[0] - tongc[0];

if( tu % mau == 0)
	console.log(tu/mau);
else
	console.log('NA');
