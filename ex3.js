#!/usr/bin/env node

'use strict';
var i,n,nt=1;
var A = [];
var B = [];
var k = 0;
function check(x)
{
	if(x==1|x==2) nt=1;
	if(x>2)
	{
		for(i=2;i<=Math.sqrt(x);i++)
		{
			if(x%i==0){nt=0;break;}
		}
	}
	return nt
}
n=prompt("n=");
for(j=0; j<n; j++) 
{
	A[j]=prompt("A["+j+"]=");
	if(check(A[j])==1) 
		{
			B[k]=A[j]; 
			k++;
		}
}
for(j=0; j<k; j++) 
{
	console.log(B[k]+" ");
}
// このファイルを修正して、プルリクエストしてください。