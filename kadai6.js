var strArray = process.argv.slice(2);
var numArray = strArray.map(Number);

function find_max(numArray){
    var max=numArray[0];
    for (var i=1;i<numArray.length; i++){
        if(max<numArray[i])
            max=numArray[i];
    }
    return max;
}

function find_min(numArray){
    var min=numArray[0];
    for (var i=1;i<numArray.length; i++){
        if(min>numArray[i])
            min=numArray[i];
    }
    return min;
}

var numMax=find_max(numArray);
var numMin=find_min(numArray);

var X=Math.floor((numMax+numMin)/2);
console.log("結果の課題６は " +X +" です。");
