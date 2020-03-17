'use strict'; 
var i; 
for (i=process.argv.length-1;i>=2;i--) 
{ 
    console.log((i-1)+"番目は"+process.argv[i]+"です"); 
    
}