var selectionSort = function(array){
  for(var i = 0; i < array.length; i++){
    //set min to the current iteration of i
    var min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};
var array = [123,2,121,2,23]
console.log('selectionSort should return [2,2,23,121,123]-->',selectionSort(array));