#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

// return the numbers of the formula
let splitRecipe = function (recipeStr){
    let arrNum = [];
    let arrStr1 = recipeStr.split("+");
    let arrStr2 = arrStr1[1].split("=");
    arrNum.push(parseInt(arrStr1[0], 10));
    arrNum.push(parseInt(arrStr2[0], 10));
    arrNum.push(parseInt(arrStr2[1], 10));
    
    return arrNum;
}

var arrStr = process.argv.slice(2);
let recipeStr = arrStr[0]
var arrValueOfX = [];

if(recipeStr.includes('X')){
    for(var x = 0; x <10; x++){

        let xValueStr = x.toString();
        let newRecipeStr = recipeStr.replace(/X/gi, xValueStr);
        let arrTerm = splitRecipe(newRecipeStr);
        
        let term1 = arrTerm[0];
        let term2 = arrTerm[1];
        let term3 = arrTerm[2];
        let sum = term1 + term2;
        
        if(sum == term3)
            arrValueOfX.push(x);
    }
}

if(arrValueOfX.length > 1){
    console.log("X has more than 1 Value !!!");
}else if(arrValueOfX.length ==1){
    console.log(arrValueOfX[0]);
}else{
    console.log("NA");
}